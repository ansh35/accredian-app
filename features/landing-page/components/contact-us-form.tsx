"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, type EnquiryFormData } from "../schemas/enquiry";

export default function EnquiryModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<EnquiryFormData>({
        resolver: zodResolver(enquirySchema),
        defaultValues: {
            phone: "+91",
        },
    });

    if (!isOpen) return null;

    const onSubmit = async (data: EnquiryFormData) => {
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            const response = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus({
                    type: "success",
                    message: "Thank you! Your enquiry has been submitted.",
                });
                reset();
                // Optionally close modal after success delay
                setTimeout(() => {
                    onClose();
                    setSubmitStatus(null);
                }, 2000);
            } else {
                setSubmitStatus({
                    type: "error",
                    message: result.message || "Something went wrong. Please try again.",
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "Network error. Please check your connection.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Modal Backdrop Click to Close */}
            <div className="absolute inset-0" onClick={onClose} />

            <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl flex flex-col sm:flex-row overflow-hidden relative z-10 animate-in zoom-in-95 duration-300">

                <div className="hidden sm:flex w-1/2 bg-blue-100 items-center justify-center">
                    <Image
                        src="/business-v2.webp"
                        alt="Quote Request"
                        width={600}
                        height={700}
                        className="w-full h-full object-cover"
                    />
                </div>


                <div
                    id="scrollbar2"
                    className="w-full sm:w-1/2 p-5 sm:p-6 max-h-[90vh] overflow-y-auto"
                >

                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                            Enquire Now
                        </h2>

                        <button 
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-800 transition p-1 hover:bg-gray-100 rounded-full"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {submitStatus && (
                        <div className={`mt-4 p-3 rounded-md text-sm ${
                            submitStatus.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
                        }`}>
                            {submitStatus.message}
                        </div>
                    )}


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4 mt-4 text-black text-left">

                            <div>
                                <input
                                    type="text"
                                    {...register("name")}
                                    placeholder="Enter Name"
                                    className={`inputStyle ${errors.name ? "border-red-500" : ""}`}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1 text-left">{errors.name.message}</p>}
                            </div>


                            <div>
                                <input
                                    type="email"
                                    {...register("email")}
                                    placeholder="Enter Email"
                                    className={`inputStyle ${errors.email ? "border-red-500" : ""}`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 text-left">{errors.email.message}</p>}
                            </div>


                            <div>
                                <input
                                    type="tel"
                                    {...register("phone")}
                                    placeholder="Enter Phone"
                                    className={`inputStyle ${errors.phone ? "border-red-500" : ""}`}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1 text-left">{errors.phone.message}</p>}
                            </div>


                            <div>
                                <input
                                    type="text"
                                    {...register("company")}
                                    placeholder="Enter company name"
                                    className={`inputStyle ${errors.company ? "border-red-500" : ""}`}
                                />
                                {errors.company && <p className="text-red-500 text-xs mt-1 text-left">{errors.company.message}</p>}
                            </div>


                            <div>
                                <select
                                    {...register("domain")}
                                    className={`inputStyle ${errors.domain ? "border-red-500" : ""}`}
                                >
                                    <option value="">Select Domain</option>
                                    <option>Technology</option>
                                    <option>Finance</option>
                                    <option>Healthcare</option>
                                    <option>Marketing</option>
                                </select>
                                {errors.domain && <p className="text-red-500 text-xs mt-1 text-left">{errors.domain.message}</p>}
                            </div>


                            <div>
                                <input
                                    type="text"
                                    {...register("candidates")}
                                    placeholder="Enter No. of candidates"
                                    className={`inputStyle ${errors.candidates ? "border-red-500" : ""}`}
                                />
                                {errors.candidates && <p className="text-red-500 text-xs mt-1 text-left">{errors.candidates.message}</p>}
                            </div>


                            <div>
                                <select
                                    {...register("mode")}
                                    className={`inputStyle ${errors.mode ? "border-red-500" : ""}`}
                                >
                                    <option value="">Select Mode of Delivery *</option>
                                    <option>Online</option>
                                    <option>Offline</option>
                                    <option>Hybrid</option>
                                </select>
                                {errors.mode && <p className="text-red-500 text-xs mt-1 text-left">{errors.mode.message}</p>}
                            </div>


                            <div>
                                <input
                                    type="text"
                                    {...register("location")}
                                    placeholder="Eg: Gurgaon, Delhi, India"
                                    className={`inputStyle ${errors.location ? "border-red-500" : ""}`}
                                />
                                {errors.location && <p className="text-red-500 text-xs mt-1 text-left">{errors.location.message}</p>}
                            </div>


                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full px-4 py-3 text-white font-bold rounded-lg transition-all shadow-lg ${
                                        isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
                                    }`}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>


                <style jsx>{`
            .inputStyle {
              width: 100%;
              padding: 10px 8px;
              font-size: 14px;
              border: none;
              border-bottom: 2px solid #d4d4d4;
              outline: none;
              background: white;
              transition: 0.2s ease;
            }

            .inputStyle:focus {
              border-bottom-color: #3b82f6;
            }
          `}</style>
            </div>
        </div>
    );
}
