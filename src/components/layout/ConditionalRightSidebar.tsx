'use client';

import { usePathname } from 'next/navigation';
import { RightSidebar } from './RightSidebar';

export default function ConditionalRightSidebar() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    if (!isHome) return null;

    return <RightSidebar />;
}
