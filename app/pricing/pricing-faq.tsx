"use client";

import { useState } from "react";
import styles from "./page.module.css";

type PricingFaqItem = {
    question: string;
    answer: string;
};

type PricingFaqProps = {
    items: PricingFaqItem[];
};

export function PricingFaq({ items }: PricingFaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className={styles.faqList}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div key={item.question} className={styles.faqItem}>
                        <button
                            type="button"
                            className={styles.faqButton}
                            aria-expanded={isOpen}
                            aria-controls={`pricing-faq-${index}`}
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                            <span>{item.question}</span>
                            <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
                        </button>
                        <div
                            id={`pricing-faq-${index}`}
                            className={`${styles.faqPanel}${isOpen ? ` ${styles.faqPanelOpen}` : ""}`}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
