"use client";
import React, { useState } from 'react';
import CloseButton from './CloseButton';

const eudoxus = { fontFamily: 'Eudoxus Sans, Arial, sans-serif' };

export default function Modal({ isOpen, onClose }) {
    const [touched, setTouched] = useState(false);
    const [email, setEmail] = useState("");
    const [referral, setReferral] = useState("");
    const [newsletter, setNewsletter] = useState(true);

    if (!isOpen) return null;

    return (
        <div style={{
            position: "fixed", top: 8, left: 8, right: 8, bottom: 8,
            backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex",
            justifyContent: "center", alignItems: "center",
            zIndex: 1000,
            ...eudoxus
        }}>
            <div style={{
                position: "absolute",
                top: "calc(50% - 340px - 20px)",
                right: "calc(50% - 365px - 20px)",
                overflow: "visible",
                zIndex: 2
            }}>
                <CloseButton onClick={onClose} />
            </div>
            <div className="modal-content" style={{
                background: "#fff",
                padding: "40px",
                paddingBottom: "2rem",
                borderRadius: "16px",
                width: "730px",
                maxWidth: "730px",
                minWidth: "320px",
                minHeight: "680px",
                maxHeight: "680px",
                position: "relative",
                boxSizing: "border-box",
                overflowY: "auto",
                overflowX: "hidden",
                display: "flex",
                flexDirection: "column",
                ...eudoxus
            }}>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "1.2rem",
                    marginBottom: "1.8rem",
                    fontFamily: 'Eudoxus Sans, Arial, sans-serif',
                    fontWeight: 900 // thinner
                }}>
                    <span style={{
                        color: "#F9830B",
                        fontWeight: 900, // thinner
                        fontSize: "30px",
                        fontFamily: 'Eudoxus Sans, Arial, sans-serif'
                    }}>
                        Request a Demo!
                    </span>
                </div>
                <div style={{ width: "100%", margin: "0 auto 1.2rem auto", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: "column" }}>
                    <span style={{ fontSize: "13px", color: "#666", userSelect: "none", width: "100%", display: "block", marginBottom: "0.2rem" }}>
                        Share your information and request a demo to see our platform in action.
                    </span>
                    <span style={{ fontSize: "13px", color: "#666", userSelect: "none", width: "100%", display: "block" }}>
                        Your journey to excellence starts now!
                    </span>
                </div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        setTouched(true);
                        if (email.trim() && referral.trim()) {
                            // handle submit logic here
                        }
                    }}
                    style={{
                        marginTop: "5px",
                        position: "relative",
                        minHeight: "340px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        height: "100%",
                        ...eudoxus
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "1.1rem", width: "100%", maxWidth: "100%", alignItems: "flex-start", marginLeft: 0, boxSizing: 'border-box' }}>
                        <label htmlFor='email' id="forminator-field-email-1_685e8f5d98b12-label" className="forminator-label" style={{ marginBottom: "0.3em", fontSize: "clamp(0.7rem, 2vw, 0.85rem)", fontWeight: 700, fontFamily: 'Open Sans, Arial, sans-serif', display: "flex", alignItems: "center" }}>
                            Email <span className="forminator-required" style={{ color: '#6c17f7', marginLeft: 4, fontSize: '1.3em' }}>*</span>
                        </label>
                        <input
                            id='forminator-field-email-1_685e8f5d98b12'
                            className="forminator-input forminator-email--field"
                            type="email"
                            name="email-1"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your company email"
                            data-required="1"
                            aria-required="true"
                            aria-describedby="forminator-field-email-1_685e8f5d98b12-error"
                            aria-invalid={touched && !email.trim() ? "true" : "false"}
                            style={{ width: "100%", maxWidth: "100%", boxSizing: 'border-box', height: "clamp(32px, 6vw, 38px)", fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)", borderRadius: "clamp(10px, 2vw, 16px)", padding: "0 clamp(12px, 2vw, 20px)", border: "1px solid #ddd", fontFamily: 'Eudoxus Sans, Arial, sans-serif' }}
                        />
                        {touched && !email.trim() && (
                            <span className="forminator-error-message" id="forminator-field-email-1_685e8f5d98b12-error" style={{
                                marginTop: "0.5em",
                                marginBottom: "1em",
                                width: "100%",
                                maxWidth: "100%",
                                background: "#EEEEEE",
                                borderRadius: "clamp(10px, 2vw, 16px)",
                                padding: "8px clamp(12px, 2vw, 20px)",
                                color: "#BE0027",
                                fontSize: "12px",
                                fontFamily: 'Eudoxus Sans, Arial, sans-serif',
                                border: "1px solid #ddd",
                                display: 'block',
                                boxSizing: 'border-box',
                                textAlign: 'left'
                            }}>
                                This field is required
                            </span>
                        )}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "1.1rem", width: "100%", maxWidth: "100%", alignItems: "flex-start", marginLeft: 0, boxSizing: 'border-box' }}>
                        <label htmlFor='message' id="forminator-field-textarea-1_685e8f5d98b12-label" className="forminator-label" style={{ marginBottom: "0.3em", fontSize: "clamp(0.7rem, 2vw, 0.85rem)", fontWeight: 700, fontFamily: 'Open Sans, Arial, sans-serif' }}>Your Message (optional)</label>
                        <textarea
                            id='forminator-field-textarea-1_685e8f5d98b12'
                            className="forminator-textarea"
                            name="textarea-1"
                            placeholder="Enter your message"
                            rows={6}
                            style={{ width: "100%", maxWidth: "100%", boxSizing: 'border-box', minHeight: "clamp(70px, 12vw, 80px)", height: "clamp(70px, 12vw, 80px)", fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)", borderRadius: "clamp(10px, 2vw, 16px)", padding: "12px clamp(12px, 2vw, 20px)", border: "1px solid #ddd", fontFamily: 'Eudoxus Sans, Arial, sans-serif', resize: "none" }}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "1.1rem", width: "100%", maxWidth: "100%", alignItems: "flex-start", marginLeft: 0, boxSizing: 'border-box' }}>
                        <label htmlFor='referral' id="forminator-field-text-2_685e8f5d98b12-label" className="forminator-label" style={{ marginBottom: "0.3em", fontSize: "clamp(0.7rem, 2vw, 0.85rem)", fontWeight: 700, fontFamily: 'Open Sans, Arial, sans-serif', display: "flex", alignItems: "center" }}>
                            How Did You Hear About Us? <span className="forminator-required" style={{ color: '#6c17f7', marginLeft: 4, fontSize: '1.3em' }}>*</span>
                        </label>
                        <input
                            id="forminator-field-text-2_685e8f5d98b12"
                            className="forminator-input forminator-name--field"
                            type="text"
                            name="text-2"
                            value={referral}
                            onChange={e => setReferral(e.target.value)}
                            placeholder=""
                            data-required="1"
                            aria-describedby="forminator-field-text-2_685e8f5d98b12-error"
                            aria-invalid={touched && !referral.trim() ? "true" : "false"}
                            style={{ width: "100%", maxWidth: "100%", boxSizing: 'border-box', height: "clamp(32px, 6vw, 38px)", fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)", borderRadius: "clamp(10px, 2vw, 16px)", padding: "0 clamp(12px, 2vw, 20px)", border: "1px solid #ddd", fontFamily: 'Eudoxus Sans, Arial, sans-serif' }}
                        />
                        {touched && !referral.trim() && (
                            <span className="forminator-error-message" id="forminator-field-text-2_685e8f5d98b12-error" style={{
                                marginTop: "0.5em",
                                marginBottom: "1em",
                                width: "100%",
                                maxWidth: "100%",
                                background: "#EEEEEE",
                                borderRadius: "clamp(10px, 2vw, 16px)",
                                padding: "8px clamp(12px, 2vw, 20px)",
                                color: "#BE0027",
                                fontSize: "12px",
                                fontFamily: 'Eudoxus Sans, Arial, sans-serif',
                                border: "1px solid #ddd",
                                display: 'block',
                                boxSizing: 'border-box',
                                textAlign: 'left'
                            }}>
                                This field is required!
                            </span>
                        )}
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "1.2rem",
                        marginBottom: "0.8rem",
                        width: "100%",
                        maxWidth: "100%",
                        marginLeft: 0,
                        marginRight: 0,
                        boxSizing: 'border-box',
                        padding: 0
                    }}>
                        <input
                            id="forminator-field-checkbox-1-1-685e8f5d98b12"
                            className="forminator-checkbox"
                            type="checkbox"
                            name="checkbox-1[]"
                            checked={newsletter}
                            onChange={e => setNewsletter(e.target.checked)}
                            style={{ marginRight: "0.7rem", width: "18px", height: "18px", marginLeft: 0, padding: 0 }}
                        />
                        <label htmlFor="forminator-field-checkbox-1-1-685e8f5d98b12" className="forminator-checkbox-label" style={{ fontSize: "12px", color: "#000", cursor: "pointer", userSelect: "none", display: "block", textAlign: "left", margin: 0, padding: 0 }}>
                            Add me to your newsletter and keep me updated whenever your publish new products
                        </label>
                    </div>
                    <div style={{ flex: 1 }} />
                    <div style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1.5rem",
                        marginBottom: 0
                    }}>
                        <button
                            className="forminator-button forminator-button-submit btn-purple"
                            type="submit"
                            style={{
                                backgroundColor: "#6c17f7",
                                color: "white",
                                padding: "14px 36px",
                                borderRadius: "999px",
                                border: "none",
                                cursor: "pointer",
                                fontFamily: 'Eudoxus Sans, Arial, sans-serif',
                                fontSize: "1.15rem",
                                fontWeight: 700,
                                marginBottom: "1.5rem"
                            }}
                        >
                            Submit Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}