import React from 'react';
import './ConfirmDialog.css';

interface ConfirmDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
    confirmText?: string;
    cancelText?: string;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ 
    isOpen, 
    onClose, 
    onConfirm, 
    message,
    confirmText = "确定",
    cancelText = "取消"
}) => {
    if (!isOpen) return null;

    return (
        <div className="confirm-dialog-overlay">
            <div className="confirm-dialog">
                <div className="confirm-dialog-content">
                    <p className="confirm-message">{message}</p>
                    <div className="confirm-buttons">
                        <button className="confirm-button cancel" onClick={onClose}>
                            {cancelText}
                        </button>
                        <button className="confirm-button confirm" onClick={onConfirm}>
                            {confirmText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog; 