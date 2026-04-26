import { Home, Trophy, Users, MessageCircle } from 'lucide-react';
import { NavItem } from '@/types';

export const MOBILE_NAV_ITEMS: NavItem[] = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'My Tournament', icon: Trophy, href: '/tournament/1' },
    { label: 'Social', icon: Users, href: '#' },
    { label: 'Chat', icon: MessageCircle, href: '#', badge: 1 },
];
