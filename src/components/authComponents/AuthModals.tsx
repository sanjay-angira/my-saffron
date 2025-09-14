"use client"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/services/redux/store";
import LoginForm from "@/components/authComponents/LoginForm";
import SignUpForm from "@/components/authComponents/SignUpForm";
import { toggleModal } from "@/services/redux/slices/modalSlice";

const AuthModals = () => {
    const dispatch = useDispatch();
    const toggleModalState = useSelector((state: RootState) => state.modal.toggleModal);
    const toggleForm = useSelector((state: RootState) => state.modal.toggleForm);
    if (!toggleModalState) {
        return null;
    }
    return (
        <div className="modal-backdrop">
            <section id="reg_login">
                <div className={`container scale-in ${toggleForm ? 'active' : ''}`} style={{ position: 'relative' }}>
                    {/* Close (cross) button INSIDE modal */}
                    <button
                        onClick={() => dispatch(toggleModal())}
                        style={{
                            position: 'absolute',
                            top: 4,
                            right: 16,
                            background: 'transparent',
                            border: 'none',
                            fontSize: '2rem',
                            color: '#ea580c',
                            cursor: 'pointer',
                            zIndex: 10
                        }}
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                    <div className="user signinBx">
                        <div className="imgBx"><img src="https://res.cloudinary.com/diyp1k5z5/image/upload/v1744874379/login-img_cdeenv.jpg" alt="" /></div>
                        <div className="formBx">
                            <LoginForm />
                        </div>
                    </div>
                    <div className="user signupBx">
                        <div className="formBx">
                            <SignUpForm />
                        </div>
                        <div className="imgBx"><img src="https://res.cloudinary.com/diyp1k5z5/image/upload/v1744874376/signup-img_daepqz.png" alt="" /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AuthModals;