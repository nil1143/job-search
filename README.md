# Job Board <img src="public/logo.png" width="25">


<!-- ![Logo](public/logo.png) -->
A powerful platform connecting job seekers and employers with ease. Built with Next.js and TypeScript, Job Board offers a seamless, secure, and feature-rich experience for exploring jobs, creating listings, and managing profiles—all hosted on Vercel. Whether you're posting a job or searching for your next career move, we've got you covered.

[![Next.js Version](https://img.shields.io/badge/Next.js-15.1.7-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

[https://job-search-roan.vercel.app](https://job-search-roan.vercel.app/)


## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Get Started](#get-started)

<!-- 
- [Installation](#installation)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license) -->




## Features


### **📝 Onboarding** in three stages: 
Login ->  Choose you role -> Setup your profile!

<img src="public/job-search-screenshoots/onboarding.png">

### For Company
- **🛡️ Profile Setup**: Add company details and upload a logo for branding.
- **📝 Job Post Creation**:  
  - Craft stunning job listings with a rich text editor powered by Tiptap.  
  - Set custom salary ranges with an intuitive slider.  
  - Smooth image uploading with UploadThing.  
  - Choose listing durations: 30, 60, or 90 days.  
- **💳 Stripe Payment Integration**: Securely process payments for job postings with webhooks for activation and expiration.

### For Job Seekers
- **Profile Management**: Provide your details and upload your CV in PDF format to stand out.  
- **📄 Index Page**: Browse all job posts with filtering, pagination, and suspense for fast loading.  
- **⭐ Favorites Route**: Save your top picks to revisit later.  
- **🆔 Job Post Details**: View detailed job info and Apply or Save to favourites.

### Smart Automation
- **📬 Inngest Background Workflow**: Listings automatically expire after their set duration—no manual updates needed.

### Security & Performance
- **🛡️ Arcjet Security**: Protection against XSS, SQL injection, and other attacks with custom rate limiting (higher limits for authenticated users, bot protection).  
- **🚀 Vercel Deployment**: Fast, reliable performance on Vercel.

### More Power for Users
- **🗂️ CRUD Functionality**: View, edit, or delete your job posts effortlessly.  


### Best UI practices
- **Skeleton**: Pretty placeholders for loading content!
<br>



## Tech Stack

Our platform is powered by cutting-edge technology:  
- **[Next.js 15.1.7](https://nextjs.org/)**: Fast, modern web framework.  
- **[TypeScript 5](https://www.typescriptlang.org/)**: Type-safe coding.  
- **[Prisma 6.3.1](https://www.prisma.io/)**: Database management.  
- **[Shadcn](https://ui.shadcn.com/) & [Tailwind CSS](https://tailwindcss.com/)**: Beautiful, accessible design.  
- **[NextAuth.js](https://next-auth.js.org/)**: Secure authentication.  
- **[Arcjet](https://arcjet.com/)**: Top-notch security, rate-limiting.  
- **[Inngest](https://inngest.com/)**: Automated workflows.  
- **[Stripe](https://stripe.com/)**: Reliable payments.  
- **[Tiptap](https://tiptap.dev/)**: Rich text editing for job posts.  
- **[UploadThing](https://uploadthing.com/)**: Smooth file uploads.  

## Screenshots

### Sections

<details>
<summary>Desktop <b>CLICK</b> to see</summary>

#### Homepage
![index_button](/public/job-search-screenshoots/homepage.png)

#### Homepage Empty List
![index_button](/public/job-search-screenshoots/homepage-no-jobs-found.png)

#### Post Job
![index_button](/public/job-search-screenshoots/create-job.png)

#### Job Info
![index_button](/public/job-search-screenshoots/jobId.png)

#### My Job Listings
![index_button](/public/job-search-screenshoots/my-job-listing.png)

#### My Saved Jobs
![index_button](/public/job-search-screenshoots/ny-saved-jobs.png)

#### My Saved Jobs Empty List
![index_button](/public/job-search-screenshoots/my-saved-notfound.png)


</details>

### Forms

<details>
<summary>Forms <b>CLICK</b> to see</summary>

#### Company
![index_button](/public/job-search-screenshoots/login4.png)

#### Jobseeker
![index_button](/public/job-search-screenshoots/login3.png)

#### Post Job
![index_button](/public/job-search-screenshoots/create-form.png)

#### Edit Job
![index_button](/public/job-search-screenshoots/edit-job.png)

</details>


### Modals and other components

<details>
<summary>Modals <b>CLICK</b> to see</summary>

#### Login
![index_button](/public/job-search-screenshoots/login6.png)

#### Choose User Type
![index_button](/public/job-search-screenshoots/login5.png)

#### Search Filter
![index_button](/public/job-search-screenshoots/filter.png)

#### User Toggle
![index_button](/public/job-search-screenshoots/user-toggle.png)

### Pagination
![index_button](/public/job-search-screenshoots/pagination.png)

#### Themes
![index_button](/public/job-search-screenshoots/theme.png) 
![index_button](/public/job-search-screenshoots/themes-light.png)

#### Payment Success
![index_button](/public/job-search-screenshoots/payment-success.png)

#### Payment Cancel
![index_button](/public/job-search-screenshoots/payment-cancel.png)

</details>


### Skeletons 

<details>
<summary>Skeletons <b>CLICK</b> to see</summary>

#### Home Skeleton
![index_button](/public/job-search-screenshoots/skeleton0.png)

#### My Job Listings Skeleton
![index_button](/public/job-search-screenshoots/skeleton3.png)

#### Saved Jobs Skeleton
![index_button](/public/job-search-screenshoots/skeleton4.png)

</details>

### Mobile
<details>
<summary>Mobile <b>CLICK</b> to see</summary>

<details>
<summary>- Homepage <b>CLICK</b></summary>

![index_button](/public/job-search-screenshoots/mobile-home.png)
</details>

<details>
<summary>- My Job Listing <b>CLICK</b></summary>

![index_button](/public/job-search-screenshoots/mobile-my-listings.png)
</details>

<details>
<summary>- Saved Jobs <b>CLICK</b></summary>

![index_button](/public/job-search-screenshoots/mobile-saved-jobs.png)
</details>

<details>
<summary>- Job Card <b>CLICK</b></summary>

![index_button](/public/job-search-screenshoots/mobile-jobId.png)
</details>

<details>
<summary>- Create Job</summary>

![index_button](/public/job-search-screenshoots/mobile-postjob.png)
</details>
</div>
</details>


## Get Started

Ready to find your next job or hire top talent?  

Visit us at [https://job-search-roan.vercel.app/](https://job-search-roan.vercel.app/) and join the community!

- Sign Up/Log In: Create an account as an Company or Job Seeker.  
  - **Company**: Create your first job post and reach thousands.  
  - **Job Seekers**: Sign up and upload your CV today. 
- Set Up Profile: Add logos (companys) or CVs (seekers).  
- Post or Browse: Create listings or explore jobs with filters and favorites.  
- Pay & Publish: Use Stripe to activate job posts.  
- Stay Updated: Receive job summaries via email.