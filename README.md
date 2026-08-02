# SleepDeprived – Team Portfolio Website

A MEAN stack portfolio website built as part of a university project at HTW Berlin. The site showcases the four team members behind the game project *Board Game Madness* and includes individual profile pages, a project overview, and an admin editing interface.

---

## Tech Stack

- **Frontend:** Angular (TypeScript)
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose)
- **Styling:** Bootstrap, NES.css (pixel borders)
- **Rich Text Editor:** Quill
- **Icons:** Font Awesome

---

## Features

- Individual profile pages with pixel character eye tracking
- Admin login with protected edit routes (`authGuard`)
- Rich text editing via Quill editor
- Profile picture upload and frame selection
- File upload and download
- Customisable box, bio, role, and skills colour themes
- Social links per profile
- Animated floating logo
- Responsive navigation with dropdown menus
- Prev/Next profile navigation

---

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB running locally
- Angular CLI installed (`npm install -g @angular/cli`)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd SleepDeprived
```

### 2. Install frontend dependencies
```bash
cd frontend
npm install
```

### 3. Install backend dependencies
```bash
cd ../backend
npm install
```

### 4. Run the backend
```bash
node index.js
```
The backend runs on `http://localhost:3000`.

### 5. Run the frontend
```bash
cd ../frontend
ng serve
```
Navigate to `http://localhost:4200`.

---

## Project Structure

```
SleepDeprived/
├── frontend/          # Angular application
│   └── src/app/
│       ├── login/
│       ├── main/
│       ├── nav/
│       ├── footer/
│       ├── profile-anna/
│       ├── profile-hari/
│       ├── profile-nina/
│       ├── profile-brenda/
│       ├── profile-edit/
│       ├── project-boardgame/
│       └── shared/
├── backend/           # Express + Mongoose API
│   ├── index.js
│   ├── routes.js
│   └── models/
│       └── profile.js
```

---

## AI Usage Declaration

The following code sections were generated or assisted by AI tools:

| Code | Source |
|------|--------|
| `goToMain()` navigation method | Gemini |
| `{$set: req.body}` in backend PUT route | Claude |
| `@if(profile().length > 0)` guard | Claude |
| `[src]` binding for profile picture | Claude |
| `@keyframes float` animation for logo | Claude |
| Backend fix for `deleteOne` (runValidators, validateModifiedOnly) | Claude |
| Fixed PUT route after it stopped working | Claude |
| Hari profile page (second implementation) | Claude Code |
| `::ng-deep` Quill editor colour overrides | Claude |
| File download method | VS Code AI |
| Main page template for items | Gemini |

---

## Screenshots
Login Page
<img width="1916" height="910" alt="image" src="https://github.com/user-attachments/assets/859727c8-147c-4fdf-bbd8-513f415a9e5f" />

Home Page
<img width="1887" height="877" alt="image" src="https://github.com/user-attachments/assets/e56ff91a-7605-443a-b0d1-5ba99ce197ec" />
<img width="1852" height="692" alt="image" src="https://github.com/user-attachments/assets/d8e7ae1f-f3a1-48fa-8080-1e91c087b9a9" />
<img width="1892" height="761" alt="image" src="https://github.com/user-attachments/assets/48b7de99-6190-45c5-9593-6c222cdbbe04" />


Profile Page
<img width="1865" height="907" alt="image" src="https://github.com/user-attachments/assets/47e082b5-a03d-41ab-9db3-4696f060cf47" />
<img width="1882" height="896" alt="image" src="https://github.com/user-attachments/assets/cc6fcf0a-5736-4ad0-84a5-ea01ee862bc1" />


Project Page
<img width="1866" height="887" alt="image" src="https://github.com/user-attachments/assets/3973e7f9-5b19-4823-ab5a-be3bc9c788cf" />
<img width="1887" height="878" alt="image" src="https://github.com/user-attachments/assets/79f527f4-38c1-4f00-be7c-04cbb24e53f1" />

Edit Mode
<img width="1902" height="906" alt="image" src="https://github.com/user-attachments/assets/3d161d76-e9ce-4cac-9cc8-38868db311a0" />

---

## Sources & References

- [Angular Routing Guide](https://angular.dev/guide/routing/navigate-to-routes)
- [Angular File Upload](https://blog.angular-university.io/angular-file-upload/)
- [NES.css Pixel Borders](https://www.cssscript.com/nes-pixel-borders/)
- [Quill Rich Text Editor](https://www.youtube.com/watch?v=dGo4QymJBc8)
- [Pixel Font](https://www.1001fonts.com/pixel-fonts.html)
- [Pixel Character Generator](https://www.avatarsinpixels.com/minipix/clothing/Hair)
- [CSS Web Safe Fonts](https://www.w3schools.com/cssref/css_websafe_fonts.php)
- [Footer Tutorial](https://www.youtube.com/watch?v=UEfFpk4sSxE)
- [MDBootstrap Footer](https://mdbootstrap.com/docs/standard/navigation/footer/)
- [Website Inspiration](https://pixelsplit.games/)
