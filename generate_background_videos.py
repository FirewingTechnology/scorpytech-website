import os
import cv2
import numpy as np
import imageio_ffmpeg
import subprocess

BRAIN_DIR = r"C:\Users\Lenovo\.gemini\antigravity-ide\brain\aba8fb45-3dd4-40d7-a10d-55db0c12c3ee"
PUBLIC_DIR = r"d:\Downloads\scorpytech-official-website\scorpytech-website\public"

IMG_IT = os.path.join(BRAIN_DIR, "it_datacenter_network_1790248358657.jpg")
IMG_LAB = os.path.join(BRAIN_DIR, "lab_equipment_tech_1790267755048.jpg")
IMG_NET = os.path.join(BRAIN_DIR, "digital_network_mesh_1790267787875.jpg")

TARGET_W = 1280
TARGET_H = 720
FPS = 30
DURATION_SEC = 8
TOTAL_FRAMES = FPS * DURATION_SEC

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()

def create_animated_video(image_path, output_filename, theme="it"):
    print(f"Creating animated video for {theme} -> {output_filename}...")
    if not os.path.exists(image_path):
        print(f"Error: {image_path} does not exist!")
        return

    base_img = cv2.imread(image_path)
    if base_img is None:
        print(f"Error: Failed to read {image_path}")
        return

    orig_h, orig_w = base_img.shape[:2]
    # We will generate a video by smooth zooming, scanning beams, pulsing glows, and particle effects
    out_path = os.path.join(PUBLIC_DIR, output_filename)

    cmd = [
        ffmpeg_exe, '-y',
        '-f', 'rawvideo',
        '-vcodec', 'rawvideo',
        '-s', f'{TARGET_W}x{TARGET_H}',
        '-pix_fmt', 'bgr24',
        '-r', str(FPS),
        '-i', '-',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-preset', 'fast',
        '-crf', '20',
        '-movflags', '+faststart',
        out_path
    ]

    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.DEVNULL)

    # Seed random particles
    np.random.seed(42)
    num_particles = 60
    particles_x = np.random.uniform(0, TARGET_W, num_particles)
    particles_y = np.random.uniform(0, TARGET_H, num_particles)
    particles_vx = np.random.uniform(-0.6, 0.6, num_particles)
    particles_vy = np.random.uniform(-0.8, -0.2, num_particles)
    particles_size = np.random.uniform(1.5, 4.0, num_particles)
    particles_alpha = np.random.uniform(0.3, 0.8, num_particles)

    for i in range(TOTAL_FRAMES):
        # Progress 0.0 -> 1.0 -> 0.0 for seamless ping-pong loop
        # Using cosine for perfectly smooth deceleration at turnaround
        phase = (1.0 - np.cos(2.0 * np.pi * i / TOTAL_FRAMES)) / 2.0  # 0 to 1 and back to 0
        
        # 1. Camera Zoom and Slight Pan
        zoom = 1.0 + 0.07 * phase
        pan_x = int(orig_w * 0.02 * np.sin(2.0 * np.pi * i / TOTAL_FRAMES))
        pan_y = int(orig_h * 0.015 * phase)

        crop_w = int(orig_w / zoom)
        crop_h = int(orig_h / zoom)

        start_x = max(0, min(orig_w - crop_w, (orig_w - crop_w) // 2 + pan_x))
        start_y = max(0, min(orig_h - crop_h, (orig_h - crop_h) // 2 + pan_y))

        cropped = base_img[start_y:start_y+crop_h, start_x:start_x+crop_w]
        frame = cv2.resize(cropped, (TARGET_W, TARGET_H), interpolation=cv2.INTER_LINEAR)

        # 2. Dynamic Lighting and Glow Pulse
        # Pulse brightness and saturation
        pulse = 0.08 * np.sin(2.0 * np.pi * i / (TOTAL_FRAMES / 2.0))
        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV).astype(np.float32)
        hsv[:, :, 2] = np.clip(hsv[:, :, 2] * (1.0 + pulse), 0, 255)
        if theme == "it":
            # Enhance cyan/electric blue cables
            hsv[:, :, 1] = np.clip(hsv[:, :, 1] * (1.05 + 0.05 * pulse), 0, 255)
        elif theme == "lab":
            # Crisp high-tech clarity
            hsv[:, :, 2] = np.clip(hsv[:, :, 2] * (1.02 + 0.06 * pulse), 0, 255)
        frame = cv2.cvtColor(hsv.astype(np.uint8), cv2.COLOR_HSV2BGR)

        # 3. Scanning Laser Beam / High-Tech Sweeping Light
        scan_progress = (i / TOTAL_FRAMES * 2.0) % 1.0  # sweeps across twice
        scan_x = int(scan_progress * (TARGET_W + 200) - 100)
        
        # Subtle angled scanline
        scan_overlay = np.zeros_like(frame, dtype=np.float32)
        # Create a vertical cyan glow strip
        min_x = max(0, scan_x - 70)
        max_x = min(TARGET_W, scan_x + 70)
        if max_x > min_x:
            col_indices = np.arange(min_x, max_x)
            dist = np.abs(col_indices - scan_x) / 70.0
            beam_intensity = np.exp(-dist * 3.0) * 0.22
            if theme == "lab":
                scan_overlay[:, min_x:max_x, 0] += beam_intensity * 255 # Blue
                scan_overlay[:, min_x:max_x, 1] += beam_intensity * 220 # Green (Teal)
                scan_overlay[:, min_x:max_x, 2] += beam_intensity * 80  # Red
            else:
                scan_overlay[:, min_x:max_x, 0] += beam_intensity * 255 # Deep Blue/Cyan
                scan_overlay[:, min_x:max_x, 1] += beam_intensity * 180 # Cyan
                scan_overlay[:, min_x:max_x, 2] += beam_intensity * 30

            frame = np.clip(frame.astype(np.float32) + scan_overlay, 0, 255).astype(np.uint8)

        # 4. Floating Tech Particles / Data Packets
        for p in range(num_particles):
            # Particle movement
            particles_x[p] = (particles_x[p] + particles_vx[p]) % TARGET_W
            particles_y[p] = (particles_y[p] + particles_vy[p]) % TARGET_H
            
            px = int(particles_x[p])
            py = int(particles_y[p])
            rad = int(particles_size[p])
            
            # Twinkle
            p_twinkle = (np.sin(i * 0.15 + p) + 1.0) / 2.0
            curr_alpha = float(particles_alpha[p] * (0.4 + 0.6 * p_twinkle))
            
            # Draw glowing particle
            color = (255, 230, 100) if theme == "it" else ((220, 255, 120) if theme == "lab" else (255, 200, 80))
            cv2.circle(frame, (px, py), rad, color, -1, lineType=cv2.LINE_AA)
            if rad > 2:
                cv2.circle(frame, (px, py), rad + 2, (int(color[0]*0.4), int(color[1]*0.4), int(color[2]*0.4)), 1, lineType=cv2.LINE_AA)

        # 5. Vignette / Dark Ambient Edge for contrast with web typography
        # Add subtle dark gradient at top and bottom so text stays ultra-readable
        grad = np.linspace(0.85, 1.0, 120)[:, None, None]
        frame[:120] = (frame[:120] * grad).astype(np.uint8)
        grad_bot = np.linspace(1.0, 0.75, 150)[:, None, None]
        frame[-150:] = (frame[-150:] * grad_bot).astype(np.uint8)

        proc.stdin.write(frame.tobytes())

    proc.stdin.close()
    proc.wait()
    print(f"Finished {output_filename}, size: {os.path.getsize(out_path)} bytes")

if __name__ == "__main__":
    create_animated_video(IMG_IT, "hero-video.mp4", "it")
    create_animated_video(IMG_LAB, "lab-video.mp4", "lab")
    create_animated_video(IMG_NET, "network-video.mp4", "network")
    print("All background videos generated successfully!")
