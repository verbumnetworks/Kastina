'use client';

import { ChangeEvent, useState } from 'react';
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function BecomeCatechistPage() {
  const [formData, setFormData] = useState({});
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, files } = e.target as any;
    setFormData(prev => ({ ...prev, [name]: type === 'file' ? files?.[0] : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // handle form submission
  };

  return (
    <main className="bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Become a Catechist</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Surname & Other Names */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Surname *</label>
              <input name="surname" required className="w-full border rounded p-2" onChange={handleChange} />
            </div>
            <div>
              <label className="font-semibold">Other Names *</label>
              <input name="otherNames" required className="w-full border rounded p-2" onChange={handleChange} />
            </div>
          </div>

          {/* Home Town */}
          <div>
            <label className="font-semibold">Home Town *</label>
            <input name="homeTown" placeholder="Your hometown" required className="w-full border rounded p-2" onChange={handleChange} />
          </div>

          {/* Address */}
          <div>
            <label className="font-semibold">Address *</label>
            <input name="address" placeholder="Apartment, studio, or floor" required className="w-full border rounded p-2" onChange={handleChange} />
          </div>

          {/* Date of Birth, Parish, Date of Baptism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="font-semibold">Date Of Birth *</label>
              <input type="date" name="dob" required className="w-full border rounded p-2" onChange={handleChange} />
            </div>
            <div>
              <label className="font-semibold">Parish / Church Attending *</label>
              <input name="parish" required className="w-full border rounded p-2" onChange={handleChange} />
            </div>
            <div>
              <label className="font-semibold">Date Of Baptism *</label>
              <input type="date" name="baptismDate" required className="w-full border rounded p-2" onChange={handleChange} />
            </div>
          </div>

          {/* Date of First Holy Communion, Marital Status, Date of Marriage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="font-semibold">Date Of First Holy Communion *</label>
              <input type="date" name="communionDate" required className="w-full border rounded p-2" onChange={handleChange} />
            </div>
            <div>
              <label className="font-semibold">Marital Status *</label>
              <select name="maritalStatus" required className="w-full border rounded p-2" onChange={handleChange}>
                <option value="">Select...</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <div>
              <label className="font-semibold">Date Of Marriage</label>
              <input type="date" name="marriageDate" className="w-full border rounded p-2" onChange={handleChange} />
            </div>
          </div>

          {/* Academic Qualification & Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Academic Qualification *</label>
              <select name="qualification" required className="w-full border rounded p-2" onChange={handleChange}>
                <option value="">Select...</option>
                <option value="ssce">SSCE</option>
                <option value="nd">ND</option>
                <option value="hnd">HND</option>
                <option value="degree">Degree</option>
              </select>
            </div>
            <div>
              <label className="font-semibold">Phone Number *</label>
              <input type="tel" name="phone" required className="w-full border rounded p-2" onChange={handleChange} />
            </div>
          </div>

          {/* Occupation & Hobby */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Occupation / Profession *</label>
              <input name="occupation" required className="w-full border rounded p-2" onChange={handleChange} />
            </div>
            <div>
              <label className="font-semibold">Hobby *</label>
              <input name="hobby" required className="w-full border rounded p-2" onChange={handleChange} />
            </div>
          </div>

          {/* Why Catechist */}
          <div>
            <label className="font-semibold">Why do you want to be a full-time Catechist? *</label>
            <textarea name="reason" rows={3} required className="w-full border rounded p-2" onChange={handleChange} />
          </div>

          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Upload Credential *</label>
              <input type="file" name="credential" required onChange={handleChange} />
            </div>
            <div>
              <label className="font-semibold">Upload Baptismal Card *</label>
              <input type="file" name="baptismCard" required onChange={handleChange} />
            </div>
            <div>
              <label className="font-semibold">Upload Marriage Certificate</label>
              <input type="file" name="marriageCert" onChange={handleChange} />
            </div>
            <div>
              <label className="font-semibold">Upload Recommendation Letter From Parish Priest *</label>
              <input type="file" name="parishPriestLetter" required onChange={handleChange} />
            </div>
            <div>
              <label className="font-semibold">Upload First Recommendation Letter From Catholic Communicant *</label>
              <input type="file" name="firstRecLetter" required onChange={handleChange} />
            </div>
            <div>
              <label className="font-semibold">Upload Second Recommendation Letter From Catholic Communicant *</label>
              <input type="file" name="secondRecLetter" required onChange={handleChange} />
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full py-3 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition">
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
}
