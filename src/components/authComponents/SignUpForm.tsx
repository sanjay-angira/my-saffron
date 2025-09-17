"use client";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { postData } from '../../services/api/apiService';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from '@/services/api/API_ENDPOINT';
import {  toggleForm } from '../../services/redux/slices/modalSlice';
import { useDispatch } from 'react-redux';
import Logo from '././logo';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    phone: Yup.string().required('Phone is required'),
});

export default function SignUpForm() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                const response = await postData(API_ENDPOINTS.SIGN_UP, values);
                if (response.success) {
                    toast.success('Sign up successful!');
                    resetForm();
                } else {
                    toast.error(response.message || 'Sign up failed');
                }
            } catch (err: any) {
                toast.error(err?.response?.data?.message || 'Sign up failed');
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="auth-modal-form">
            <h2 className="text-xl font-bold text-center tracking-widest mb-8 uppercase" style={{ color: 'var(--brown)' }}>Create an Account</h2>
            <form onSubmit={formik.handleSubmit} className="flex flex-col">
                <div className="flex flex-col space-y-2">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full max-w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-700 placeholder-gray-400 tracking-widest focus:ring-0 focus:outline-none text-[15px]"
                        placeholder="Username"
                        autoComplete="username"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full max-w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-700 placeholder-gray-400 tracking-widest focus:ring-0 focus:outline-none text-[15px]"
                        placeholder="Email Address"
                        autoComplete="email"
                    />
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full max-w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-700 placeholder-gray-400 tracking-widest focus:ring-0 focus:outline-none text-[15px]"
                        placeholder="Create Password"
                        autoComplete="new-password"
                    />
                    <input
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        className="w-full max-w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-700 placeholder-gray-400 tracking-widest focus:ring-0 focus:outline-none text-[15px]"
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-bold text-[15px] tracking-wide uppercase transition rounded-none px-4 py-3 border-0 leading-none mt-4"
                    style={{
                        background: loading ? '#ccc' : 'linear-gradient(135deg, var(--saffron-primary), var(--saffron-light))',
                        color: 'white',
                        boxShadow: loading ? 'none' : '0 4px 15px var(--shadow)',
                        cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                    onMouseEnter={(e) => {
                        if (!loading) {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px var(--shadow)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!loading) {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px var(--shadow)';
                        }
                    }}
                >
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>
            <div className="mt-6 text-center text-xs tracking-widest text-gray-500">
                Already have an account ?{' '}
                <button
                  type="button"
                  className="font-bold uppercase underline hover:no-underline ml-1 transition-colors"
                  style={{ color: 'var(--saffron-primary)' }}
                  onClick={() => {
                    dispatch(toggleForm());
                }}
                >
                  Sign In.
                </button>
            </div>
        </div>
    );
} 