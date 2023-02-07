// To create a navigation bar with a transparent background that changes after scrolling in a React application using CSS modules, you can follow these steps:

// 1 Membuat state untuk menyimpan informasi apakah halaman sudah scroll atau belum.
const [scrolled, setScrolled] = useState(false);

// 2 Menambahkan event listener pada saat halaman di-scroll.
useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});

const handleScroll = () => {
  if (window.pageYOffset > 50) {
    setScrolled(true);
  } else {
    setScrolled(false);
  }
};

// 3 Menerapkan kondisi CSS pada elemen navbar.
const Navbar = () => {
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Your Navbar Content */}
    </nav>
  );
};

// 4 Mendefinisikan CSS pada file styles.
// .navbar {
//   background-color: transparent;
//   transition: background-color 0.5s ease;
// }

// .navbar.scrolled {
//   background-color: #333;
// }

// using module.css
// 1    Create a navbar.module.css file that contains the following CSS styles:

// .navbar {
//   background-color: transparent;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 99;
// }

// .scrolled {
//   background-color: #000;
// }

// 2    In your React component, import the CSS file and bind it to a variable using import styles from './navbar.module.css'.

// 3    Add a state variable in your component to keep track of whether the user has scrolled or not.
const [scrolled, setScrolled] = useState(false);

// 4    Use the window.onscroll event to detect when the user has scrolled and update the scrolled state accordingly.
useEffect(() => {
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return () => {
    window.onscroll = null;
  };
}, []);

// 5    In your component's render method, use the scrolled state to dynamically add or remove the scrolled class from the navbar element.
<nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
  ... // Your Navbar Content Here
</nav>;

// conclusion

// 1    Import CSS module pada file React component Anda.
// 2    Buat class CSS untuk menentukan gaya navbar saat tidak di-scroll dan saat di-scroll. Misalnya, buat class .navbar untuk gaya navbar saat tidak di-scroll dan class .navbarScrolled untuk gaya navbar saat di-scroll.
// 3    Gunakan state React untuk menentukan saat navbar harus memiliki gaya navbarScrolled. Misalnya, buat state scrolled dan atur nilainya ke false saat component di-mount.
// 4    Tambahkan event listener pada component untuk melakukan perubahan gaya navbar saat dilakukan scroll. Misalnya, gunakan window.addEventListener('scroll', () => { ... }) untuk mengubah nilai state scrolled saat dilakukan scroll.
// 5    Tambahkan class CSS ke tag HTML yang digunakan sebagai navbar. Misalnya, gunakan class navbar dan class navbarScrolled secara bergantian sesuai dengan nilai state scrolled.
// 6    Tentukan gaya yang diinginkan untuk masing-masing class CSS dengan menggunakan properti CSS.
// 7    Jalankan aplikasi Anda dan uji fungsionalitas dari navbar yang memiliki gaya yang berubah setelah dilakukan scroll.
