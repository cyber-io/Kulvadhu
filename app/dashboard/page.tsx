// app/dashboard/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { useAuth } from '@/context/AuthContext';
import { User, Package, Heart, Settings, LogOut, MapPin, Phone, Mail, Loader2 } from 'lucide-react';

export default function DashboardPage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (isLoading) {
    return (
      <>
        <SiteHeader />
        <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-rose-600 mx-auto mb-4" />
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
        <SiteFooter />
      </>
    );
  }

  if (!user) {
    return null; // Will redirect due to useEffect
  }

  const orders = [
    {
      id: 'ORD-12345',
      date: '15 Mar 2024',
      status: 'Delivered',
      items: 2,
      total: 31400
    },
    {
      id: 'ORD-12346',
      date: '20 Mar 2024',
      status: 'Processing',
      items: 1,
      total: 18900
    }
  ];

  const stats = [
    { label: 'Total Orders', value: '12', icon: Package },
    { label: 'Wishlist Items', value: '5', icon: Heart },
    { label: 'Account Since', value: user.joinDate.split(' ')[1], icon: User }
  ];

  return (
    <>
      <SiteHeader />
      
      <div className="min-h-screen bg-gray-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-serif font-bold text-gray-900">My Dashboard</h1>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-rose-600 transition"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
                  {/* User Info */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-10 w-10 text-rose-600" />
                    </div>
                    <h2 className="font-semibold text-gray-900">{user.name}</h2>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>

                  {/* Navigation */}
                  <nav className="space-y-2">
                    <button className="w-full flex items-center gap-3 px-3 py-2 bg-rose-50 text-rose-700 rounded-lg font-medium">
                      <User className="h-5 w-5" />
                      Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                      <Package className="h-5 w-5" />
                      Orders
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                      <Heart className="h-5 w-5" />
                      Wishlist
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                      <MapPin className="h-5 w-5" />
                      Addresses
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                      <Settings className="h-5 w-5" />
                      Settings
                    </button>
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                      <stat.icon className="h-8 w-8 text-rose-600 mx-auto mb-3" />
                      <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
                    <button className="text-rose-600 hover:text-rose-700 font-medium">
                      View All
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-semibold text-gray-900">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">₹{order.total.toLocaleString()}</p>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Delivered' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Profile Information */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <p className="text-gray-900">{user.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <p className="text-gray-900">{user.email}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <p className="text-gray-900">{user.phone || 'Not provided'}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                      <p className="text-gray-900">{user.joinDate}</p>
                    </div>
                  </div>
                  
                  <button className="mt-6 bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-700 transition">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}