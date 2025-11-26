import React, { useState } from 'react';
import { Mail, MapPin, Smartphone, CheckCircle, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import SectionHeading from '../components/shared/SectionHeading';
import Button from '../components/shared/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Add to Firestore
      await addDoc(collection(db, 'contactSubmissions'), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'new'
      });

      // Send email notification (you'll need to set up Firebase Functions for this)
      // For now, we'll just save to database

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 animate-in fade-in duration-500">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question about our media services, consultancy, or products? We'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full filter blur-[80px] opacity-20"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin size={24} className="text-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Registered Office</p>
                    <p className="text-slate-300 leading-relaxed">
                      No. 1, Najibullah Plaza, Opposite NNPC Filling Station, Ashaka Road
                      <br />
                      Gombe, Gombe State, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail size={24} className="text-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email Us</p>
                    <a href="mailto:info@amidost.com" className="text-slate-300 hover:text-rose-400 transition-colors">
                      info@amidost.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Smartphone size={24} className="text-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Call Us</p>
                    <a href="tel:+2348030638864" className="text-slate-300 hover:text-rose-400 transition-colors">
                      0803 063 8864
                    </a>
                    <p className="text-slate-400 text-sm mt-1">Mon - Fri: 9:00 AM - 5:00 PM (WAT)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-12">
              <p className="text-slate-400 text-sm">Registered Company: RC 8530225</p>
            </div>
          </div>

          <div className="p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-green-900">Message sent successfully!</p>
                    <p className="text-sm text-green-700">We'll get back to you within 24-48 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-red-900">Something went wrong</p>
                    <p className="text-sm text-red-700">Please try again or email us directly at info@amidost.com</p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Last Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Subject <span className="text-rose-500">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                >
                  <option>General Inquiry</option>
                  <option>Media Partnership</option>
                  <option>Consultancy Request</option>
                  <option>App Waitlist</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all h-32"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button
                variant="primary"
                className="w-full"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
