import React from 'react';
import './VoiceAndMedia.css';

function VoiceAndMedia() {
  const mediaSkills = [
    {
      id: 1,
      icon: "🎬",
      title: "Video Production & Sync",
      description: "Extensive experience in video editing using Sony Vegas. Highly skilled in precise audio-visual synchronization, ensuring lip-sync and visual cues match perfectly."
    },
    {
      id: 2,
      icon: "🎛️",
      title: "Advanced Audio Engineering",
      description: "Proficient in Adobe Audition. Mastered noise reduction, pitch shifting, applying delay/reverb, and creating custom vocal filters to manipulate audio atmospheres."
    },
    {
      id: 3,
      icon: "🎙️",
      title: "Voice-Over & Dubbing",
      description: "Recorded and produced personal audio files for dubbing. Deep understanding of tone, emotion, and how to surgically clean up audio (De-reverb/Denoise) for professional delivery."
    }
  ];

  return (
    <section id="media" className="media-container">
      <h2 className="section-title">Media & Audio Engineering</h2>
      <p className="media-intro">
        Beyond writing code, I have a deep passion for digital media and sound engineering. Here is how I bring stories to life through sound and vision:
      </p>
      
      <div className="media-grid">
        {mediaSkills.map((item) => (
          <div key={item.id} className="media-card">
            <div className="media-icon">{item.icon}</div>
            <h3 className="media-title">{item.title}</h3>
            <p className="media-desc">{item.description}</p>
          </div>
        ))}
      </div>

      {/* قسم الشرح والفلسفة بدلاً من الفيديوهات حالياً */}
      <div className="philosophy-section">
        <h3 className="philosophy-title">💡 The Bridge Between Code and Emotion</h3>
        <p className="philosophy-text">
          I believe that the next breakthrough in AI isn't just about faster algorithms; it's about <span className="highlight-text">human empathy</span>. 
          By combining my Full-Stack development skills with my critical ear for audio engineering, I don't just build systems — I ensure they sound, feel, and react naturally. 
          Whether it's spotting a robotic pitch shift, removing background noise artifacts, or aligning lip-sync, my goal is to help Multimodal AI achieve true human-level expression.
        </p>
      </div>

    </section>
  );
}

export default VoiceAndMedia;