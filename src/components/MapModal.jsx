'use client'
import { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './MapModal.module.css';

// Ensure app element is set once to avoid accessibility warning on the client
let appElementSet = false;

export default function MapModal({ isOpen, onRequestClose, children }) {
    useEffect(() => {
        if (!appElementSet && typeof window !== 'undefined') {
            const appRoot = document.getElementById('__next') || document.body;
            if (appRoot) {
                Modal.setAppElement(appRoot);
                appElementSet = true;
            }
        }
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={styles.overlay}
            className={styles.content}
            contentLabel="Map Modal"
        >
            <button className={styles.closeButton} onClick={onRequestClose}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_202_3802)">
                        <path d="M25 7L7 25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25 25L7 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_202_3802">
                            <rect width="32" height="32" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </button>
            {children}
        </Modal>
    );
}
