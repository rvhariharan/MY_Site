import React, { useState, useEffect } from 'react';

export default function Loader({ loading }) {
    if (!loading) return null;

    return (
        <div id="loader" className="fixed inset-0 z-50 flex items-center justify-center bg-edgeBlack">
            <div className="flex flex-col items-center gap-6">
                <img
                    id="loader-logo"
                    src="/assets/image/Hari_Name - Copy.jpg"
                    alt="Site logo"
                    className="animate-bounce"
                    style={{ width: '84px', height: '84px', objectFit: 'contain', display: 'block' }}
                    decoding="async"
                />

                <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div id="loader-bar" className="h-2 bg-edgeOrange w-full rounded-full animate-[progress_2s_ease-in-out]"></div>
                </div>

                <div className="text-sm text-edgeMuted">Preparing…</div>
            </div>
        </div>
    );
}
