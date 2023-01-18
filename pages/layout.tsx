import React from 'react';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';

function Layout({ children }: any) {
    return (
        <div className="min-w-full min-h-screen bg-blue-100">
            <TopBar />
            <SideBar />
            <main className="pl-40 pt-16">
                {children}
            </main>
        </div>
    );
}

export default Layout;
