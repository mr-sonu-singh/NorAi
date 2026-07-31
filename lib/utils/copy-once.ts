import fs from 'fs';
import path from 'path';

const mappings = [
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/core_product_1785520894990.png', dest: 'public/images/products/core.jpg' },
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/vision_product_1785520913423.png', dest: 'public/images/products/vision.jpg' },
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/security_product_1785520929631.png', dest: 'public/images/products/security.jpg' },
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/elena_rostova_1785520947225.png', dest: 'public/images/team/elena-rostova.jpg' },
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/marcus_vance_1785520965316.png', dest: 'public/images/team/marcus-vance.jpg' },
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/sarah_jenkins_1785520985206.png', dest: 'public/images/team/sarah-jenkins.jpg' },
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/tariq_al_mansoor_1785522037346.png', dest: 'public/images/team/tariq-al-mansoor.jpg' },
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/david_chen_1785521007937.png', dest: 'public/images/avatars/david-chen.jpg' },
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/aris_thorne_1785521030487.png', dest: 'public/images/avatars/aris-thorne.jpg' },
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/neural_compute_blog_1785521052581.png', dest: 'public/images/blog/neural-compute.jpg' },
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/stark_compiler_blog_1785521075625.png', dest: 'public/images/blog/stark-compiler.jpg' },
  { src: '/home/gourav/.gemini/antigravity-ide/brain/aeb0b562-0dab-4cd3-ab61-c20e0c7e74fa/deterministic_ai_blog_1785521100958.png', dest: 'public/images/blog/deterministic-ai.jpg' },
];

export function performOneTimeCopy() {
  for (const m of mappings) {
    const destPath = path.join(process.cwd(), m.dest);
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (fs.existsSync(m.src)) {
      try {
        fs.copyFileSync(m.src, destPath);
      } catch (e) {
        console.error('[ASSET COPY ERROR]', e);
      }
    }
  }
}

performOneTimeCopy();
