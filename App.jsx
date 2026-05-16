import React, { useState, useEffect, useRef } from 'react';
import Snowfall from 'react-snowfall'; // <-- 1. IMPORT LIBRARY EFEK DI SINI
import './App.css';

// Komponen Sampul Depan (Welcoming)
const Cover = ({ onOpen }) => {
  return (
    <section className="cover-section" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Efek Zoom Sinematik pada Background Cover */}
      <div className="hero-overlay fx-kenburns" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}></div>
      
      {/* Efek Bunga khusus di halaman Cover */}
      <Snowfall 
        color="#ffb7c5" 
        snowflakeCount={30} 
        speed={[0.5, 1.2]} 
        wind={[-0.2, 0.8]} 
      />
      <div className="cover-content" style={{ position: 'relative', zIndex: 1 }}>
        <p className="cover-subtitle">Undangan Pernikahan</p>
        <h1 className="cover-title">Dicky & Rindi</h1>
        <div className="cover-divider"></div>
        <p className="to-text">Kepada Yth. Bapak/Ibu/Saudara/i</p>
        <p className="guest-name">Tamu Kehormatan</p>
        {/* Tambah class fx-glow biar tombolnya berdenyut bercahaya */}
        <button className="open-button fx-glow" onClick={onOpen}>
          Buka Undangan
        </button>
      </div>
    </section>
  );
};

// Komponen Ayat Suci Al-Quran
const QuranVerse = () => (
  <section className="quran-section fade-in">
    <div className="quran-container">
      <h2 className="bismillah-text">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h2>
      <p className="arabic-text">
        وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّن| أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ Lَـَٔايَـٰتٍۢ Lِّقَوْمٍۢ يَتَفَكَّرُونَ
      </p>
      <p className="translation-text">
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
      </p>
      <p className="surah-name">— QS. Ar-Rum: 21 —</p>
    </div>
  </section>
);

// Komponen Bagian Atas (Hero)
const Hero = () => (
  <header className="hero-section fade-in" style={{ overflow: 'hidden', position: 'relative' }}>
    {/* Efek Zoom Sinematik pada Background Hero */}
    <div className="hero-overlay fx-kenburns" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}></div>
    <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
      <p className="hero-subtitle">The Wedding Of</p>
      <h1 className="hero-title">Dicky & Rindi</h1>
      <div className="hero-divider"></div>
      <p className="hero-date">Akad : Kamis, 06 Agustus 2026</p>
      <p className="hero-date">Ngunduh Mantu : Minggu, 16 Agustus 2026</p>
    </div>
  </header>
);

// Komponen Profil Mempelai
const Couple = () => (
  <section className="couple-section fade-in">
    <div className="section-header">
      <h2 className="section-title">Mempelai</h2>
      <div className="section-divider"></div>
    </div>
    
    <div className="couple-container">
      
      {/* Kartu Mempelai Pria */}
      <div className="couple-card">
        <div className="couple-image-wrapper">
          <img
            src="/pria.jpeg" 
            alt="Dicky"
            className="couple-photo-image"
          />
          <div className="image-frame"></div>
        </div>
        <div className="couple-info">
          <h3>Praka Dicky Septian Dwi Pratama</h3>
          <p className="parent-text">Putra dari</p>
          <p className="parent-names">Bapak Budi Ispriyanto & Ibu Ida Suryani</p>
        </div>
      </div>

      <div className="couple-and-ornament">&</div>

      {/* Kartu Mempelai Wanita */}
      <div className="couple-card">
        <div className="couple-image-wrapper">
          <img
            src="/wanita.jpeg" 
            alt="Rindi"
            className="couple-photo-image"
          />
          <div className="image-frame"></div>
        </div>
        <div className="couple-info">
          <h3>Rindi Diana Fantry, Amd.Keb</h3>
          <p className="parent-text">Putri dari</p>
          <p className="parent-names">Bapak Nurhadi Sutiknyo & Ibu Anita Yuliani</p>
        </div>
      </div>

    </div>
  </section>
);

// Komponen Kisah Cinta (Timeline Modern)
const LoveStory = () => (
  <section className="story-section fade-in">
    <div className="section-header">
      <h2 className="section-title">Our Story</h2>
      <div className="section-divider"></div>
    </div>

    <div className="story-timeline">

      {/* Baris 1: Foto Kiri, Teks Kanan */}
      <div className="story-row">
        <div className="story-image-col">
          <img src="/img4.jpeg" alt="Awal Pertemuan" className="story-img" />
        </div>
        <div className="story-text-col">
          <h3 className="story-title">Pertama Bertemu (2017)</h3>
          <p className="story-text">
            Tahun 2017 menjadi saksi bisu awal mula jejak langkah kami. Kami dipertemukan sebagai teman biasa, masing-masing sibuk menganyam mimpi untuk masa depan. Meski demikian, ada getaran halus yang mulai tumbuh, perlahan namun pasti.
          </p>
        </div>
      </div>

      {/* Baris 2: Teks Kiri, Foto Kanan */}
      <div className="story-row reverse">
        <div className="story-image-col">
          <img src="/img5.jpeg" alt="Memilih Bersama" className="story-img" />
        </div>
        <div className="story-text-col">
          <h3 className="story-title">Memilih Bersama (2025)</h3>
          <p className="story-text">
            Waktu bergulir, kedewasaan menuntun kami kembali. Di tahun 2025, kami dipertemukan lagi dengan visi yang sama. Keyakinan itu hadir, menguatkan hati untuk melangkah lebih jauh sebagai pasangan.
          </p>
        </div>
      </div>

      {/* Baris 3: Foto Kiri, Teks Kanan */}
      <div className="story-row">
        <div className="story-image-col">
          <img src="/img2.jpeg" alt="Tunangan" className="story-img" />
        </div>
        <div className="story-text-col">
          <h3 className="story-title">Pertunangan (14 Juni 2025)</h3>
          <p className="story-text">
            Janji suci terucap di hadapan keluarga tercinta. Tanggal 14 Juni 2025, kami mengikat diri dalam ikatan pertunangan. Cincin yang melingkar menjadi simbol komitmen kami untuk menjaga hati.
          </p>
        </div>
      </div>

      {/* Baris 4: Teks Kiri, Foto Kanan */}
      <div className="story-row reverse">
        <div className="story-image-col">
          <img src="/img3.jpeg" alt="Pernikahan" className="story-img" />
        </div>
        <div className="story-text-col">
          <h3 className="story-title">Pernikahan (06 Agustus 2026)</h3>
          <p className="story-text">
            Inilah puncak dari perjalanan kami. Alhamdulillah, puji syukur kami bisa melaksanakan Akad Nikah dan Ngunduh Mantu. Kami siap memulai babak baru sebagai suami-istri, membangun pilar kebahagiaan kami.
          </p>
        </div>
      </div>

    </div>
  </section>
);

// Komponen Detail Acara
const EventDetails = () => (
  <section className="event-section fade-in">
    <div className="section-header">
      <h2 className="section-title">Waktu & Tempat</h2>
      <div className="section-divider"></div>
    </div>
    
    <div className="events">
      
      {/* --- KARTU AKAD NIKAH --- */}
      <div className="event-card">
        {/* Tambah class fx-float biar ikon melayang */}
        <div className="event-icon">
          <img src="/cincin.png" alt="Ikon Akad" className="custom-image-icon fx-float" />
        </div>
        <h3>Akad Nikah</h3>
        <div className="event-details-text">
          <p className="event-time" style={{ fontStyle: 'italic', color: 'var(--gold)', letterSpacing: '2px' }}>
            Alhamdulillah, Telah Dilaksanakan
          </p>
          <p className="event-date">Kamis, 06 Agustus 2026</p>
          <p className="event-location" style={{ marginTop: '15px' }}>
            Terima kasih atas segala doa dan restu <br/> yang telah diberikan untuk kelancaran acara kami.
          </p>
        </div>
      </div>
      
      {/* --- KARTU RESEPSI --- */}
      <div className="event-card">
        {/* Tambah class fx-float biar ikon melayang */}
        <div className="event-icon">
          <img src="/gunungan.png" alt="Ikon Resepsi" className="custom-image-icon fx-float" />
        </div>
        <h3>Ngunduh Mantu</h3>
        <div className="event-details-text">
          <p className="event-time">11:00 WIB - 13:00 WIB</p>
          <p className="event-date">Minggu, 16 Agustus 2026</p>
          <p className="event-location">Jl. Abdurrahman Saleh No.1</p>
          <p className="event-location">Kec. Semarang Barat</p>
          <p className="event-location">Kota Semarang</p>
        </div>
        <a 
          href="https://maps.app.goo.gl/1szvRf2hzUhRhPTXA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="map-button"
        >
          Lihat Lokasi
        </a>
      </div>

    </div>
  </section>
);

// Komponen Form Konfirmasi Kehadiran (RSVP)
const RSVP = () => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('Hadir');
  const [reason, setReason] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyAOj9pd8ZWdEUyxEYWZXdvLXOfKUADjNNS5gP_vpR0j0j5aUs454m2HvodOClIoUd3/exec'; 
    
    const formData = new FormData();
    formData.append('nama', name);
    formData.append('kehadiran', attendance);
    formData.append('keterangan', reason);
    formData.append('waktu', new Date().toLocaleString('id-ID'));

    fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
      .then(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        setIsLoading(false);
        alert('Maaf, koneksi terputus. Silakan coba lagi.');
        console.error('Error!', error.message);
      });
  };

  return (
    <section className="rsvp-section fade-in">
      <div className="rsvp-box">
        <h2 className="section-title">Konfirmasi Kehadiran</h2>
        <div className="section-divider"></div>
        
        {isSubmitted ? (
          <div className="success-message" style={{ padding: '30px 0', textAlign: 'center', animation: 'fadeInUp 0.5s ease' }}>
            <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: '3.5rem', color: 'var(--gold)', marginBottom: '15px' }}>
              Terima Kasih!
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--gray)', lineHeight: '1.8' }}>
              Konfirmasi kehadiran Anda atas nama <strong>{name}</strong> telah berhasil kami terima.<br/> 
              Sampai jumpa di hari bahagia kami!
            </p>
          </div>
        ) : (
          <>
            <p className="rsvp-subtitle">Mohon konfirmasi kehadiran Anda pada acara kami.</p>
            <form onSubmit={handleSubmit} className="rsvp-form">
              <input 
                type="text" 
                placeholder="Nama Lengkap Anda" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                className="rsvp-input"
                disabled={isLoading}
              />
              <select 
                value={attendance} 
                onChange={(e) => setAttendance(e.target.value)}
                className="rsvp-select"
                disabled={isLoading}
              >
                <option value="Hadir">Ya, Saya akan hadir</option>
                <option value="Tidak Hadir">Maaf, Saya tidak bisa hadir</option>
              </select>
              
              <textarea 
                placeholder="Pesan, doa restu, atau alasan (Opsional)" 
                value={reason} 
                onChange={(e) => setReason(e.target.value)} 
                className="rsvp-input"
                rows="3"
                disabled={isLoading}
                style={{ resize: 'none', fontFamily: 'inherit' }}
              ></textarea>

              <button 
                type="submit" 
                className="rsvp-submit" 
                disabled={isLoading}
                style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'wait' : 'pointer', marginTop: '10px' }}
              >
                {isLoading ? 'MENGIRIM DATA...' : 'KIRIM KONFIRMASI'}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

// Komponen Utama
function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isOpened) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isOpened]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.log("Audio otomatis diblokir", error));
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="App" style={{ position: 'relative' }}>
      
      {/* Elemen Audio */}
      <audio ref={audioRef} loop>
        <source src="/Janji Suci.mp3" type="audio/mpeg" />
      </audio>

      {!isOpened ? (
        <Cover onOpen={handleOpenInvitation} />
      ) : (
        <div className="main-invitation" style={{ position: 'relative' }}>
          
          {/* Efek Bunga setelah undangan terbuka (Menyelimuti seluruh section isi) */}
          <Snowfall 
            color="#ffb7c5" 
            snowflakeCount={45} 
            speed={[0.6, 1.5]} 
            wind={[-0.3, 1.0]} 
            style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 99 }}
          />

          <Hero />
          <QuranVerse /> 
          <Couple />
          <LoveStory />
          <EventDetails />
          <RSVP />
          
          <footer className="footer">
            <p className="footer-main-text">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.</p>
            <p className="footer-joke-text">weeding_dicky_rindy</p>
            <div className="footer-divider"></div>
            <p className="footer-copyright">© 2026 Dicky & Rindi</p>
          </footer>

          {/* Tombol Kontrol Musik Melayang ditambah class fx-glow */}
          <button 
            className={`music-control ${isPlaying ? 'spin' : ''} fx-glow`} 
            onClick={toggleAudio}
            aria-label="Toggle Music"
            style={{ zIndex: 100 }} // Supaya tombol musik selalu di atas efek bunga
          >
            {isPlaying ? '🎵' : '🔇'}
          </button>

        </div>
      )}
    </div>
  );
}

export default App;