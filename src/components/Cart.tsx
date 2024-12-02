import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
    const { state, dispatch } = useCart();

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity < 1) return;
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    const removeItem = (id: number) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const handleCheckout = () => {
        // Implement checkout logic here
        alert('Proceeding to checkout...');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
            <div className="absolute right-0 top-0 h-full w-full max-w-md transform bg-gray-900 shadow-xl transition-transform duration-500 ease-in-out">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b border-gray-800 px-4 py-6">
                        <h2 className="text-lg font-medium text-white">Shopping Cart ({state.items.length})</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {state.items.length === 0 ? (
                        <div className="flex flex-1 items-center justify-center">
                            <div className="text-center">
                                <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                                <h3 className="mt-2 text-lg font-medium text-white">Your cart is empty</h3>
                                <p className="mt-1 text-gray-400">Start adding some items to your cart!</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex-1 overflow-y-auto px-4 py-6">
                                {state.items.map((item) => (
                                    <div key={item.id} className="flex py-6 animate-fade-in">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-800">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div className="flex justify-between text-base font-medium text-white">
                                                <h3>{item.name}</h3>
                                                <p className="ml-4">${(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </button>
                                                    <span className="px-4 py-1 rounded-full bg-gray-800 text-white min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-red-400 hover:text-red-300 transition-colors"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-800 px-4 py-6">
                                <div className="flex justify-between text-base font-medium text-white mb-4">
                                    <p>Subtotal</p>
                                    <p>${state.total.toLocaleString()}</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-400">
                                    Shipping and taxes calculated at checkout.
                                </p>
                                <div className="mt-6 space-y-4">
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-yellow-400 px-6 py-3 text-base font-medium text-black rounded-full hover:bg-yellow-300 transition-colors duration-300"
                                    >
                                        Checkout
                                    </button>
                                    <button
                                        onClick={clearCart}
                                        className="w-full bg-red-500/10 text-red-400 px-6 py-3 text-base font-medium rounded-full hover:bg-red-500/20 transition-colors duration-300"
                                    >
                                        Clear Cart
                                    </button>
                                    <button
                                        onClick={onClose}
                                        className="w-full text-center text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;