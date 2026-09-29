# 🏆 3D Award Splash Screen Integration Guide

This guide provides step-by-step instructions to integrate the **Matrix Digital Rain & 3D WebGL Award Splash Screen** into any Next.js or React web project.

---

## 📁 1. Files to Copy

To transfer this feature, copy the following files from this repository into the corresponding folders of your target project:

| File Path | Description |
| :--- | :--- |
| `components/AwardSplashScreen.tsx` | Main splash screen wrapper with Matrix backdrop, 2-column split layout, countdown timer, auto-dismiss, and minimized floating award badge. |
| `components/Trophy3DRenderer.tsx` | Three.js WebGL canvas renderer with 3D studio lighting, dynamic perspective camera angle, model auto-centering, and 60fps rotation loop. |
| `components/MatrixRainBackground.tsx` | High-performance HTML5 canvas matrix binary digital rain effect. |
| `public/arunangshubanerjee-battery-1795.glb` | The 3D GLB model file. |

---

## 📦 2. Required NPM Dependencies

Run the following command in your target project terminal to install the required dependencies:

```bash
npm install three framer-motion canvas-confetti lucide-react
npm install -D @types/three @types/canvas-confetti
```

---

## 🚀 3. Quick Start / Usage

Import and render `<AwardSplashScreen />` inside your main page (`app/page.tsx`) or root layout (`app/layout.tsx`):

```tsx
import AwardSplashScreen from "@/components/AwardSplashScreen";

export default function Page() {
  return (
    <main className="relative">
      {/* 3D Award Splash Screen (Triggers on first page visit or refresh) */}
      <AwardSplashScreen />

      {/* Your main website content */}
    </main>
  );
}
```

---

## ⚙️ 4. Customization & Props Guide

### Force Show (Testing Mode)
To keep the splash screen permanently visible while designing or testing, pass `forceShow={true}`:

```tsx
<AwardSplashScreen forceShow={true} />
```

### Changing the 3D Model (`.glb` File)
1. Place your new `.glb` file in the `/public` folder (e.g., `/public/my-trophy.glb`).
2. Update the `modelPath` prop in `components/AwardSplashScreen.tsx`:

```tsx
<Trophy3DRenderer modelPath="/my-trophy.glb" className="w-full h-[500px] sm:h-[620px] md:h-[700px]" />
```

### Adjusting 3D Model Size & Rotation Speed
In `components/Trophy3DRenderer.tsx`:
- **Scale**: Modify `targetScale = 3.6 / maxDim;` to adjust model size.
- **Rotation Speed**: Modify `pivotGroup.rotation.y += 0.006;` inside `animate()`.
- **Camera Tilt**: Modify `pivotGroup.rotation.x = 0.18;` to adjust the 3D tilt angle.

---

## 💡 5. Next.js Static Export Best Practice

In Next.js App Router, `Trophy3DRenderer` must be dynamically imported with `ssr: false` in `AwardSplashScreen.tsx` to prevent server-side WebGL compilation errors during static HTML generation:

```tsx
import dynamic from "next/dynamic";

const Trophy3DRenderer = dynamic(() => import("./Trophy3DRenderer"), {
  ssr: false,
});
```
