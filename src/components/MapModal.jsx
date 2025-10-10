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
            {children}
        </Modal>
    );
}
