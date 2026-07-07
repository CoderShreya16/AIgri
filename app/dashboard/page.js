"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/ui/Loader";

export default function Dashboard() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // CRUD State
  const [formData, setFormData] = useState({ name: '', season: '', disease: '' });
  const [editingId, setEditingId] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [actionMessage, setActionMessage] = useState(null);

  // Fetch crop data from the backend API
  const fetchCrops = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/crops");
      if (!response.ok) {
        throw new Error("Failed to fetch crop data. Backend might be down.");
      }
      const data = await response.json();
      setCrops(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    setActionMessage(null);
    try {
      const url = editingId ? `http://localhost:5000/api/crops/${editingId}` : 'http://localhost:5000/api/crops';
      const method = editingId ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Failed to save crop');
      
      setFormData({ name: '', season: '', disease: '' });
      setEditingId(null);
      setActionMessage({ type: 'success', text: `Crop ${editingId ? 'updated' : 'added'} successfully!` });
      
      // Refresh list
      await fetchCrops();
      
      setTimeout(() => setActionMessage(null), 3000);
    } catch (err) {
      setActionMessage({ type: 'error', text: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  const handleEdit = (crop) => {
    setFormData({ name: crop.name, season: crop.season, disease: crop.disease });
    setEditingId(crop._id || crop.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setFormData({ name: '', season: '', disease: '' });
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this crop?')) return;
    
    try {
      const response = await fetch(`http://localhost:5000/api/crops/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete crop');
      
      setCrops(crops.filter(c => (c._id || c.id) !== id));
      setActionMessage({ type: 'success', text: 'Crop deleted successfully!' });
      setTimeout(() => setActionMessage(null), 3000);
    } catch (err) {
      setActionMessage({ type: 'error', text: err.message });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-50/10 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 px-6 py-10 max-w-7xl mx-auto w-full">

        {/* Welcome Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-800 to-green-600 dark:from-green-950 dark:to-green-800 rounded-3xl text-white p-8 md:p-10 shadow-lg border border-green-700/20 dark:border-green-900/30">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-12 translate-x-12" />
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Welcome Back, Farmer 👋
          </h1>
        </section>

        {/* CRUD Form Section */}
        <section className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700/50">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            {editingId ? 'Edit Crop' : 'Add New Crop'}
          </h2>
          
          {actionMessage && (
            <div className={`mb-6 p-4 rounded-xl ${actionMessage.type === 'success' ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border border-green-200 dark:border-green-800' : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 border border-red-200 dark:border-red-800'}`}>
              {actionMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Crop Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:border-green-500 focus:ring-green-500 outline-none transition"
                placeholder="e.g. Rice"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Season</label>
              <input 
                type="text" 
                name="season" 
                value={formData.season} 
                onChange={handleInputChange} 
                required 
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:border-green-500 focus:ring-green-500 outline-none transition"
                placeholder="e.g. Kharif"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Disease</label>
              <input 
                type="text" 
                name="disease" 
                value={formData.disease} 
                onChange={handleInputChange} 
                required 
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:border-green-500 focus:ring-green-500 outline-none transition"
                placeholder="e.g. Blast"
              />
            </div>
            <div className="md:col-span-3 flex gap-3 mt-2">
              <button 
                type="submit" 
                disabled={actionLoading}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-medium transition-colors disabled:opacity-70"
              >
                {actionLoading ? 'Saving...' : editingId ? 'Update Crop' : 'Add Crop'}
              </button>
              {editingId && (
                <button 
                  type="button" 
                  onClick={handleCancelEdit}
                  className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-2 rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Live Backend Data Section */}
        <section className="mt-8 bg-white/50 dark:bg-gray-800/30 p-8 rounded-3xl border border-gray-100 dark:border-gray-700/50">
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-6 flex items-center gap-2">
            Live Crop Data from Backend 🌱
          </h2>

          {loading ? (
            <Loader />
          ) : error ? (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 p-4 rounded-xl flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-bold">Error Loading Data</p>
                <p className="text-sm mt-1">{error}</p>
                <p className="text-sm mt-1 opacity-80">Make sure your backend server is running on http://localhost:5000</p>
              </div>
            </div>
          ) : crops.length === 0 ? (
            <div className="text-gray-500 dark:text-gray-400 p-4 text-center">No crops found in the backend.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crops.map((crop) => {
                const id = crop._id || crop.id;
                return (
                  <div key={id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">{crop.name}</h3>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2.5 py-0.5 rounded-full font-medium border border-green-200 dark:border-green-800/50 truncate max-w-[100px]" title={id}>
                        {id.substring(0, 8)}...
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <span className="w-20 text-gray-500 dark:text-gray-400 font-medium">Season:</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded-md">{crop.season}</span>
                      </div>

                      <div className="flex items-center text-sm">
                        <span className="w-20 text-gray-500 dark:text-gray-400 font-medium">Disease:</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-md border border-red-100 dark:border-red-900/30">{crop.disease}</span>
                      </div>
                    </div>
                    
                    <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-2">
                      <button 
                        onClick={() => handleEdit(crop)}
                        className="text-sm px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40 rounded-lg transition-colors"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(id)}
                        className="text-sm px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40 rounded-lg transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

      </main>

      <Footer />
    </div>
  );
}