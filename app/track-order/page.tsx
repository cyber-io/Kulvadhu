// app/track-order/page.tsx
'use client';

import { useState } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Search, Package, Truck, CheckCircle2, Clock } from 'lucide-react';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [trackingData, setTrackingData] = useState(null);

  const trackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate tracking data
    setTrackingData({
      orderId: orderId || 'KVN-12345',
      status: 'in_transit',
      estimatedDelivery: '25 Mar 2024',
      customer: {
        name: 'Priya Sharma',
        address: '123 Fashion Street, Mumbai, Maharashtra - 400001'
      },
      items: [
        {
          name: 'Royal Blue Zari Banarasi Silk Saree',
          quantity: 1,
          price: 12500
        }
      ],
      timeline: [
        {
          status: 'ordered',
          title: 'Order Placed',
          description: 'Your order has been confirmed',
          date: '20 Mar 2024, 10:30 AM',
          completed: true
        },
        {
          status: 'confirmed',
          title: 'Order Confirmed',
          description: 'We\'ve accepted your order',
          date: '20 Mar 2024, 11:45 AM',
          completed: true
        },
        {
          status: 'processing',
          title: 'Processing',
          description: 'Your saree is being prepared',
          date: '21 Mar 2024, 09:15 AM',
          completed: true
        },
        {
          status: 'shipped',
          title: 'Shipped',
          description: 'Your order has been shipped',
          date: '22 Mar 2024, 02:30 PM',
          completed: true
        },
        {
          status: 'in_transit',
          title: 'In Transit',
          description: 'Your order is on the way',
          date: '23 Mar 2024, 10:00 AM',
          completed: false,
          current: true
        },
        {
          status: 'delivered',
          title: 'Delivered',
          description: 'Expected delivery',
          date: '25 Mar 2024',
          completed: false
        }
      ]
    });
  };

  const getStatusIcon = (status: string, completed: boolean, current: boolean) => {
    if (completed) return <CheckCircle2 className="h-6 w-6 text-green-500" />;
    if (current) return <Package className="h-6 w-6 text-rose-600" />;
    return <Clock className="h-6 w-6 text-gray-300" />;
  };

  return (
    <>
      <SiteHeader />
      
      <div className="min-h-screen bg-gray-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2 text-center">
              Track Your Order
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Enter your order ID to track the status of your shipment
            </p>

            {/* Search Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <form onSubmit={trackOrder} className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="Enter your order ID (e.g., ORD-12345)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition flex items-center gap-2"
                >
                  <Search className="h-5 w-5" />
                  Track Order
                </button>
              </form>
            </div>

            {/* Tracking Results */}
            {trackingData && (
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Order Information</h3>
                      <p className="text-sm text-gray-600">Order ID: {trackingData.orderId}</p>
                      <p className="text-sm text-gray-600">Est. Delivery: {trackingData.estimatedDelivery}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Customer</h3>
                      <p className="text-sm text-gray-600">{trackingData.customer.name}</p>
                      <p className="text-sm text-gray-600">{trackingData.customer.address}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Current Status</h3>
                      <div className="flex items-center gap-2">
                        <Truck className="h-5 w-5 text-rose-600" />
                        <span className="font-semibold text-rose-600">In Transit</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
                  {trackingData.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-gray-900">₹{item.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                {/* Tracking Timeline */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-6">Order Timeline</h3>
                  
                  <div className="space-y-8">
                    {trackingData.timeline.map((step, index) => (
                      <div key={step.status} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          {getStatusIcon(step.status, step.completed, step.current)}
                          {index < trackingData.timeline.length - 1 && (
                            <div className={`w-0.5 h-8 mt-2 ${
                              step.completed ? 'bg-green-500' : 'bg-gray-200'
                            }`} />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className={`${step.current ? 'text-rose-600' : step.completed ? 'text-green-600' : 'text-gray-400'} font-semibold mb-1`}>
                            {step.title}
                          </div>
                          <p className="text-gray-600 text-sm mb-1">{step.description}</p>
                          <p className="text-gray-400 text-xs">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support Info */}
                <div className="bg-rose-50 rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-rose-900 mb-2">Need Help?</h3>
                  <p className="text-rose-700 text-sm mb-4">
                    If you have any questions about your order, our customer service team is here to help.
                  </p>
                  <button className="bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-700 transition">
                    Contact Support
                  </button>
                </div>
              </div>
            )}

            {/* No tracking data state */}
            {!trackingData && (
              <div className="text-center py-12">
                <Package className="h-24 w-24 text-gray-300 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Track Your Saree Journey
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Enter your order ID above to see the current status, estimated delivery date, and tracking timeline of your beautiful saree.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}