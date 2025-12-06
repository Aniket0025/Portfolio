import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Astra from '../assets/Astra.png';
import ParticlesBackground from '../components/ParticlesBackground.jsx';

const SERVICE_ID = import.meta.env.VITE_SERIVE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    idea: ''
  });

  const [error, setError] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'budget' && value && !/^\d*$/.test(value)) return;

    setFormData((p) => ({ ...p, [name]: value }));

    if (error[name]) setError((p) => ({ ...p, [name]: '' }));
  };

  const validataForm = () => {
    const required = ['name', 'email', 'service', 'idea'];
    const newsError = {};

    required.forEach((f) => {
      if (!formData[f].trim()) newsError[f] = 'This field is required';
    });

    if (formData.service !== "Other" && !formData.budget.trim()) {
      newsError.budget = "This field is required";
    }

    setError(newsError);
    return Object.keys(newsError).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validataForm()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setStatus("success");

      setFormData({
        name: '',
        email: '',
        service: '',
        budget: '',
        idea: ''
      });

    } catch (err) {
      console.error('Error sending email:', err);
      setStatus("failed");
    }
  };


  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >

      <ParticlesBackground />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">

        {/* LEFT IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Astra}
            alt="Contact"
            className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          className="w-full md:w-1/2 bg-[#0b0b0b] p-8 rounded-3xl shadow-xl border border-white/10 backdrop-blur-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-3xl font-bold mb-6">Let's Work Together.</h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Your Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`p-3 rounded-lg bg-[#1b1b1b] border ${error.name ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-400 focus:border-blue-500 outline-none transition`}
              />
              {error.name && <p className="text-red-500 text-xs">{error.name}</p>}
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Your Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`p-3 rounded-lg bg-[#1b1b1b] border ${error.email ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-400 focus:border-blue-500 outline-none transition`}
              />
              {error.email && <p className="text-red-500 text-xs">{error.email}</p>}
            </div>

            {/* SERVICE */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Service Needed <span className="text-red-500">*</span></label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`p-3 rounded-lg bg-[#1b1b1b] border ${error.service ? 'border-red-500' : 'border-gray-700'} text-white focus:border-blue-500 outline-none transition`}
              >
                <option value="" disabled className='mb-1 text-sm text-white'>Something in mind?</option>
                <option value="Web Development" className="text-white">Web Development</option>
                <option value="System  Architecture" className="text-white">System  Architecture</option>
                <option value="ML Engineer" className="text-white">ML Engineer</option>
                <option value="Other" className="text-white">Other</option>
              </select>
              {error.service && <p className="text-red-500 text-xs">{error.service}</p>}
            </div>

            {/* BUDGET FIELD ONLY IF SERVICE NOT "Other" */}
            {formData.service && formData.service !== "Other" && (
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Budget <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="budget"
                  placeholder="Your Budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`p-3 rounded-lg bg-[#1b1b1b] border ${error.budget ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-400 focus:border-blue-500 outline-none transition`}
                />
                {error.budget && <p className="text-red-500 text-xs">{error.budget}</p>}
              </div>
            )}

            {/* IDEA */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Explain Your Idea <span className="text-red-500">*</span></label>
              <textarea
                name="idea"
                rows={5}
                placeholder="Enter Your Idea"
                value={formData.idea}
                onChange={handleChange}
                className={`p-3 rounded-lg bg-[#1b1b1b] border ${error.idea ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-400 focus:border-blue-500 outline-none transition`}
              />
              {error.idea && <p className="text-red-500 text-xs">{error.idea}</p>}
            </div>

            {/* STATUS MESSAGE */}
            {status && (
              <p
                className={`text-sm ${
                  status === "sending"
                    ? "text-yellow-400"
                    : status === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                    ? "Message sent successfully ✔️"
                    : "Failed to send message ✘"}
              </p>
            )}

            {/* BUTTON */}
            <motion.button
              className="w-full bg-[#0A57FF] hover:bg-[#004de8] disabled:opacity-60 text-white py-3 rounded-lg font-semibold transition duration-300"
              whileTap={{ scale: 0.95 }}
              disabled={status === "sending"}
              type="submit"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
