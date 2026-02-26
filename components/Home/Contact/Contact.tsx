import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'

const Contact = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            phone: Yup.string()
                .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
                .required("Phone is required"),
            message: Yup.string().required("Message is required")
        }),
        onSubmit: (values) => {
            console.log(values)
            alert("Message submitted")
        }
    })

    return (
        <div className='pt-16 pb-16'>
            <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

                {/* Content Left */}
                <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>
                        Schedule a Call with me to see if I can help
                    </h1>
                    <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                        Reach out today and let's discuss how I can help you achieve your goals.
                    </p>

                    {/* Info */}
                    <div className='mt-7'>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiPhone className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>+91-9524530533</p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiEnvelope className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>rufnulafrideen@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiMap className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>Chennai, India</p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className='flex items-center mt-8 space-x-3'>

                        <Link href="https://facebook.com" target="_blank">
                            <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300'>
                                <FaFacebookF className='text-white w-6 h-6' />
                            </div>
                        </Link>

                        <Link href="https://youtube.com" target="_blank">
                            <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-red-800 transition-all duration-300'>
                                <FaYoutube className='text-white w-6 h-6' />
                            </div>
                        </Link>

                        <Link href="https://x.com" target="_blank">
                            <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-black transition-all duration-300'>
                                <FaXTwitter className='text-white w-6 h-6' />
                            </div>
                        </Link>

                        <Link href="https://instagram.com/Rufnul" target="_blank">
                            <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-pink-800 transition-all duration-300'>
                                <FaInstagram className='text-white w-6 h-6' />
                            </div>
                        </Link>

                    </div>
                </div>

                {/* Form */}
                <form
                    onSubmit={formik.handleSubmit}
                    className='md:p-10 p-5 bg-pink-950 rounded-2xl'
                >
                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder='Name'
                        className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name && (
                        <p className='text-red-400 text-sm mt-1'>{formik.errors.name}</p>
                    )}

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder='E-mail'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p className='text-red-400 text-sm mt-1'>{formik.errors.email}</p>
                    )}

                    {/* Phone */}
                    <input
                        type="text"
                        name="phone"
                        placeholder='Phone'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.phone && formik.touched.phone && (
                        <p className='text-red-400 text-sm mt-1'>{formik.errors.phone}</p>
                    )}

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder='Your Message'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-40 resize-none'
                        value={formik.values.message}
                        onChange={formik.handleChange}
                    ></textarea>
                    {formik.errors.message && formik.touched.message && (
                        <p className='text-red-400 text-sm mt-1'>{formik.errors.message}</p>
                    )}

                    {/* Button */}
                    <button
                        type="submit"
                        className='mt-8 px-12 py-4 bg-[crimson] hover:bg-pink-800 transition-all duration-300 text-white rounded-full'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
