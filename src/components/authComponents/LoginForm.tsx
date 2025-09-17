"use client";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { postData } from '../../services/api/apiService';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { API_ENDPOINTS } from '@/services/api/API_ENDPOINT';
import { useDispatch } from 'react-redux';
import { setUser } from '../../services/redux/slices/userSlice';
import { useRouter } from 'next/navigation';
import { toggleForm } from '../../services/redux/slices/modalSlice';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export default function LoginForm() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                debugger
                const response = await postData(API_ENDPOINTS.LOGIN, values);
                if (response.success) {
                    if (response.data.accessToken) {
                        Cookies.set('accessToken', response.data.accessToken, { expires: 7 });
                    }
                    if (response.data.refreshToken) {
                        Cookies.set('refreshToken', response.data.refreshToken, { expires: 7 });
                    }
                    if (response.data.user) {
                        const user = response.data.user;
                        dispatch(setUser({
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            phone: user.phone,
                            address: user.address,
                            city: user.city,
                            state: user.state,
                            pinCode: user.pinCode,
                            profileImage: user.profileImage,
                        }));
                    }
                    resetForm();
                    router.push('/')
                    toast.success('Login successful!');
                } else {
                    toast.error(response.message || 'Login failed');
                }
            } catch (err: any) {
                toast.error(err?.response?.data?.message || 'Login failed');
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="auth-modal-form">
            <h2 className="text-xl font-bold text-center tracking-widest mb-8 uppercase" style={{ color: 'var(--brown)' }}>Sign In</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full max-w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-700 placeholder-gray-400 tracking-widest focus:ring-0 focus:outline-none"
                    placeholder="Username"
                    autoComplete="username"
                />
                <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full max-w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-700 placeholder-gray-400 tracking-widest focus:ring-0 focus:outline-none"
                    placeholder="Password"
                    autoComplete="current-password"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-bold text-[15px] tracking-wide uppercase transition rounded-none px-4 py-3 border-0 leading-none"
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
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <div className="mt-6 text-center text-xs tracking-widest text-gray-500">
                Don&apos;t have an account ?{' '}
                <button
                    type="button"
                    className="font-bold uppercase underline hover:no-underline ml-1 transition-colors"
                    style={{ color: 'var(--saffron-primary)' }}
                    onClick={() => {
                        dispatch(toggleForm());
                    }}
                >
                    Sign Up.
                </button>
            </div>
        </div>
    );
} 