import React, { useEffect, useState } from 'react';

export default function Loader({ loading, setLoading }) {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const t1 = setTimeout(() => setProgress(45), 200);
        const t2 = setTimeout(() => setProgress(78), 600);
        const t3 = setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setLoading(false);
                setTimeout(() => setVisible(false), 600);
            }, 300);
        }, 1200);

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [setLoading]);

    if (!visible) return null;

    return (
        <div id="loader" className={`fixed inset-0 z-50 flex items-center justify-center bg-edgeBlack transition-opacity duration-600 ${!loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
                    <div
                        id="loader-bar"
                        className="h-2 bg-edgeOrange rounded-full transition-all duration-700"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="text-sm text-edgeMuted">Preparing…</div>
            </div>
        </div>
    );
}
