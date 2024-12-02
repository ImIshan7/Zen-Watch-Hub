import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    total: number;
}

type CartAction =
    | { type: 'ADD_TO_CART'; payload: CartItem }
    | { type: 'REMOVE_FROM_CART'; payload: number }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
    | { type: 'CLEAR_CART' };

const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    total: state.total + action.payload.price
                };
            }
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price
            };
        }
        case 'REMOVE_FROM_CART': {
            const itemToRemove = state.items.find(item => item.id === action.payload);
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                total: state.total - (itemToRemove ? itemToRemove.price * itemToRemove.quantity : 0)
            };
        }
        case 'UPDATE_QUANTITY': {
            const item = state.items.find(item => item.id === action.payload.id);
            if (!item) return state;

            const quantityDiff = action.payload.quantity - item.quantity;
            if (action.payload.quantity < 1) {
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload.id),
                    total: state.total - (item.price * item.quantity)
                };
            }

            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
                total: state.total + (item.price * quantityDiff)
            };
        }
        case 'CLEAR_CART':
            return {
                items: [],
                total: 0
            };
        default:
            return state;
    }
};

// Load cart from localStorage
const loadCart = (): CartState => {
    if (typeof window === 'undefined') return { items: [], total: 0 };
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : { items: [], total: 0 };
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, null, loadCart);

    // Save cart to localStorage whenever it changes
    React.useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state));
    }, [state]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};