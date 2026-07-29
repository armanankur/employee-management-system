import { Loader, Loader2, Save, User } from 'lucide-react'
import React, { useState } from 'react'

export const ProfileForm = ({ initialData, onSuccess }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className='card p-5 sm:p-6 mb-6'>

            <h2 className='text-base font-medium text-slate-900 mb-6 pb-4 border-b 
          border-slate-100 flex items-center gap-2'>
                <User className='w-5 h-5 text-slate-500' />
                Public Profile</h2>
            {error && (
                <div className='bg-rose-50 text-rose-700 p-4 rounded-xl text-sm border
     border-rose-200 mb-6 flex items-start gap-3'>
                    <div className='w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0'>
                        {error}
                    </div>
                </div>
            )}

            {message && (
                <div className='bg-emerald-50- text-emerald-700 p-4 rounded-xl text-sm border
     border-emerald-200 mb-6 flex items-start gap-3'>
                    <div className='w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0'>
                        {message}
                    </div>
                </div>
            )}

            <div className='space-y-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-sm font-medium text-slate-700 mb-2'>Name</label>
                        <input disabled value={`${initialData.firstName} ${initialData.lastName}`}
                            className='bg-slate-50 text-slate-400 cursor-not-allowed' />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-slate-700 mb-2'>Email</label>
                        <input disabled value={initialData.email}
                            className='bg-slate-50 text-slate-400 cursor-not-allowed' />
                    </div>

                    <div className='sm:col-span-2'>
                        <label className='block text-sm font-medium text-slate-700 mb-2'>Position</label>
                        <input disabled value={initialData.position}
                            className='bg-slate-50 text-slate-400 cursor-not-allowed' />
                    </div>
                </div>

                <div>

                    <label className='block text-sm font-medium text-slate-700 mb-2'>Bio</label>
                    <textarea name="bio" id="" disabled={initialData.isDeleted}
                        disabled={initialData.isDeleted}
                        defaultValue={initialData.bio || ""}
                        placeholder='write a brief bio'
                        className={`resize-none ${initialData.isDeleted ? "bg-slate-50 text-slate-400 cursor-not-allowed"
                            : ""
                            }`} />
                    <p className='text-xs text-slate-400 mt-1.5'>This will be displayed on your profile.</p>
                </div>
                {initialData.isDeleted ? (
                    <div className='pt-2'>
                        <div>
                            <p>Account Deactivated</p>
                            <p>You can no longer update your profile</p>
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-end pt-2'>
                        <button type='submit' disabled={loading}
                            className='bg-linear-to-br from-purple-700 to-fuchsia-800 text-white
                         rounded-md hover:from-purple-800 hover:to-fuchsia-900 px-4 py-2.5  flex items-center justify-center gap-2 w-full sm:w-auto'>
                            {loading ? <Loader2 className='w-4 h-4 animate-spin' /> : <Save className='w-4 h-4 ' />}
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
        </form>
    )
}
