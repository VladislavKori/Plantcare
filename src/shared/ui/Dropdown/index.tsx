import React from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { DropdownProp } from "./types";
import { DropdownMenu } from "./dropdown-menu";
import { DropdownTrigger } from "./dropdown-trigger";
import styles from "./style.module.scss"

export const Dropdown: FC<DropdownProp> = (props) => {
    const { children, side = "center", closeTrigger, onChange } = props;

    const dropdownRef = useRef<HTMLDivElement | null>(null)
    const [isOpen, setOpen] = useState<boolean>(false)

    const trigger = React.Children.toArray(children).find(el => {
        if (React.isValidElement(el) && el.type === DropdownTrigger) {
            return true
        }
    })

    const menu = React.Children.toArray(children).find(el => {
        if (React.isValidElement(el) && el.type === DropdownMenu) {
            return true
        }
    })

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        window.addEventListener('mousedown', handleClickOutside)
        return () => window.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useEffect(() => {
        setOpen(false)
    }, [closeTrigger])

    useEffect(() => {
        if (onChange) onChange(isOpen)
    }, [isOpen])

    return (
        <div ref={dropdownRef} className={styles['dropdown']}>
            <div onClick={() => setOpen(prev => !prev)}>
                {trigger}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 4, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        className={clsx(
                            styles['dropdown-menu'],
                            styles[`dropdown-menu-side-${side}`],
                            isOpen && styles['active']
                        )}
                    >
                        {menu}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}