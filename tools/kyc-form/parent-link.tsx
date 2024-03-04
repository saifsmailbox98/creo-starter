"use client";
import {useEffect, useState} from 'react';
import Link from 'next/link';

export function ParentLink({relativePath, label}: { relativePath: string; label: string }) {
    const [combinedUrl, setCombinedUrl] = useState<string>("");

    useEffect(() => {
        const url =
            window.location !== window.parent.location
                ? document.referrer
                : document.location.href;

        const currentUrl = new URL(url);
        if (!relativePath.startsWith("/")) {
            relativePath = "/" + relativePath;
        }
        currentUrl.pathname += relativePath;

        const combinedUrl = decodeURIComponent(currentUrl.toString());
        setCombinedUrl(combinedUrl);
    }, [relativePath]);
    return (
        <Link href={combinedUrl} target="_top" passHref>
            {label}
        </Link>
    );
}
