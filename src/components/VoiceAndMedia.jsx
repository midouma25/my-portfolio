import React from 'react';
import './VoiceAndMedia.css';

function VoiceAndMedia() {
  const mediaSkills = [
    {
      id: 1,
      icon: "🎬",
      title: "Video Editing & Production",
      description: "Extensive experience in video editing and content creation, starting from a personal YouTube channel. Skilled in pacing, visual storytelling, and video composition."
    },
    {
      id: 2,
      icon: "🎙️",
      title: "Voice-Over & Dubbing",
      description: "Recorded and produced personal audio files for dubbing and voice-overs. Deep understanding of tone, pitch, and emotional delivery to match video context."
    },
    {
      id: 3,
      icon: "⏱️",
      title: "Audio-Visual Synchronization",
      description: "Hands-on experience perfectly aligning audio tracks with visual cues (Lip-sync), which trained my ear for rigorous AI audio evaluation."
    }
  ];

  return (
    <section id="media" className="media-container">
      <h2 className="section-title">Media & Voice Acting</h2>
      <p className="media-intro">
        Beyond writing code, I have a deep passion for digital media. Here is how I bring stories to life through sound and vision:
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

      {/* قسم اختياري لإضافة روابط أو مشغل صوتي لاحقاً */}
      <div className="media-action">
        <button className="primary-btn">Listen to Voice Samples</button>
      </div>
    </section>
  );
}

export default VoiceAndMedia;