'use client';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const toggleMenu = () => setSearchBarOpen((prev) => !prev);

  return (
    <>
      <div
        className={`${styles.searchBar} ${
          searchBarOpen ? styles[`searchBarOpen`] : {}
        }`}
      >
        <form className={styles.searchInputBar}>
          <input placeholder="Search..." />
          <button>
            <BsSearch />
          </button>
        </form>
      </div>

      <button onClick={toggleMenu} className={styles.searchIcon}>
        {!searchBarOpen ? (
          <BsSearch />
        ) : (
          <CgClose className={styles.closeButton} />
        )}
      </button>
    </>
  );
}
