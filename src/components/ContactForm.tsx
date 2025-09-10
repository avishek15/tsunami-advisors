import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { CONFIG } from "../config/constants";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    service: string;
    message: string;
}

interface FormState {
    isSubmitting: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string;
}

export default function ContactForm() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: "",
    });
    const [formState, setFormState] = useState<FormState>({
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = (): boolean => {
        if (!formData.firstName.trim()) {
            setFormState({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                errorMessage: "First name is required",
            });
            return false;
        }
        if (!formData.lastName.trim()) {
            setFormState({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                errorMessage: "Last name is required",
            });
            return false;
        }
        if (!formData.email.trim()) {
            setFormState({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                errorMessage: "Email is required",
            });
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setFormState({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                errorMessage: "Please enter a valid email address",
            });
            return false;
        }
        if (!formData.message.trim()) {
            setFormState({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                errorMessage: "Message is required",
            });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setFormState({
            isSubmitting: true,
            isSuccess: false,
            isError: false,
            errorMessage: "",
        });

        try {
            // Execute reCAPTCHA
            if (!executeRecaptcha) {
                throw new Error("reCAPTCHA not available");
            }

            const recaptchaToken = await executeRecaptcha("contact_form");

            // Submit to Google Apps Script using FormData (more reliable)
            const formDataToSend = new FormData();
            formDataToSend.append("firstName", formData.firstName);
            formDataToSend.append("lastName", formData.lastName);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("company", formData.company);
            formDataToSend.append("service", formData.service);
            formDataToSend.append("message", formData.message);
            formDataToSend.append("recaptchaToken", recaptchaToken);
            formDataToSend.append("timestamp", new Date().toISOString());

            const response = await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: formDataToSend,
            });

            // Check if the response is ok
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || "Form submission failed");
            }
            setFormState({
                isSubmitting: false,
                isSuccess: true,
                isError: false,
                errorMessage: "",
            });

            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                service: "",
                message: "",
            });
        } catch (error) {
            console.error("Form submission error:", error);
            setFormState({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                errorMessage:
                    "Failed to send message. Please try again or contact us directly.",
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form"
        >
            <h2 className="text-subheading">Send us a Message</h2>

            {/* Success Message */}
            {formState.isSuccess && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                >
                    <CheckCircle className="text-green-600" size={20} />
                    <p className="text-green-800">
                        Thank you! Your message has been sent successfully.
                        We'll get back to you within 24 hours.
                    </p>
                </motion.div>
            )}

            {/* Error Message */}
            {formState.isError && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                >
                    <AlertCircle className="text-red-600" size={20} />
                    <p className="text-red-800">{formState.errorMessage}</p>
                </motion.div>
            )}

            <form onSubmit={handleSubmit} className="contact-form__form">
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="firstName" className="form-label">
                            First Name *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="John"
                            disabled={formState.isSubmitting}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="lastName" className="form-label">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Doe"
                            disabled={formState.isSubmitting}
                            required
                        />
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="email" className="form-label">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="john@company.com"
                        disabled={formState.isSubmitting}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="company" className="form-label">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your Company"
                        disabled={formState.isSubmitting}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="service" className="form-label">
                        Service of Interest
                    </label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="form-select"
                        disabled={formState.isSubmitting}
                    >
                        <option value="">Select a service</option>
                        <option value="ai-strategy-investor-relations">
                            AI Strategy & Investor Relations
                        </option>
                        <option value="go-to-market">
                            Go to Market Strategy
                        </option>
                        <option value="new-ai-business-models">
                            New AI Business Models
                        </option>
                        <option value="ai-agents-tools-automation">
                            AI Agents, Tools & Automation
                        </option>
                        <option value="ai-training">AI Training</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="message" className="form-label">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="form-textarea"
                        placeholder="Tell us about your project and how we can help..."
                        disabled={formState.isSubmitting}
                        required
                    />
                </div>

                <motion.button
                    whileHover={{ scale: formState.isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: formState.isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    className="btn btn--primary form-submit"
                    style={{ width: "100%" }}
                    disabled={formState.isSubmitting}
                >
                    {formState.isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <Send size={20} />
                            <span>Send Message</span>
                        </>
                    )}
                </motion.button>
            </form>
        </motion.div>
    );
}
