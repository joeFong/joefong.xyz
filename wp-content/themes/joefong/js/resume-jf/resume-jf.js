// Import the LitElement base class and html helper function
import { LitElement, css, html } from 'lit-element';
import { resumeStyles } from './resume-styles.js';

// Extend the LitElement base class
class ResumeJF extends LitElement {
  static get styles() {
    return [
      resumeStyles,
      css`
      :host { 
        display: block; 
      }`
    ]
  }

  static get properties() { 
    return {
      resume: { 
        type: Object
      }
    };
  }

  constructor() {
    super();
    // this.resume = {
    //   firstName: "Joeman",
    //   lastName: "Fong",
    //   email: "joemanfong@gmail.com",
    //   phoneNumber: "778.883.5667",
    //   socialMedia: [
    //     "https://linkedin.com/in/joemanfong",
    //     "https://github.com/joeFong",
    //     "https://medium.com/@joemanfong",
    //     "https://joefong.xyz"
    //   ],
    //   professionalSummary: [
    //     {
    //       skill: '3+ years of experience in full-stack web application development',
    //       bolded: []
    //     },
    //     {
    //       skill: '3+ years of experience working with web technologies including;',
    //       bolded: ['PHP', 'JavaScript', 'NodeJS']
    //     },
    //     {
    //       skill: '2+ years building and architecturing marketplace solutions with',
    //       bolded: ['Stripe']
    //     },
    //     {
    //       skill: '2+ years deploying and writing automated builds with',
    //       bolded: ['Gulp', 'Webpack']
    //     },
    //     {
    //       skill: '2+ years providing SEO solutions with',
    //       bolded: ['Google Analytics', 'Google Tag Manager',  'Facebook Analytics']
    //     },
    //     {
    //       skill: '2+ years of experience working with relational databases including;',
    //       bolded: ['MySQL', 'SQL Server']
    //     },
    //     {
    //       skill: '2+ years of experience working with open-source libraries and frameworks including;',
    //       bolded: ['Laravel', 'Drupal', 'Wordpress', 'Socket.IO', 'Web Driver.IO', 'Jest', 'AngularJS', 'Angular 2-4', 'React', 'React Native', 'Redux', 'Polymer', 'LitHTML', 'VueJS']
    //     },
    //     {
    //       skill: '2+ years of experience operating in an agile development environment in a ',
    //       bolded: ['LAMP', 'LEMP', 'stack']
    //     },
    //     {
    //       skill: 'Working as a DevOps Engineer with experience in a Cloud environment using various technologies such as AWS EC2, Dockers, Containers, Vultr, Iocage, and Nginx Reverse Proxies on a ',
    //       bolded: ['Linux OS']
    //     }
    //   ],
    //   experience: [
    //     {
    //       jobTitle: 'Devradius',
    //       role: 'Full Stack Developer',
    //       duration: 'April 2017 - Present',
    //       summaryOfCompany: 'Development agency focused on providing website and application development, CMS development and dedicated and shared hosting cloud environment solutions to businesses.',
    //       bulletsOfRole: [
    //         'Design, architect and implement complex SaaS, web, android and iOS applications for key clients',
    //         'Lead weekly agile sprints and participate in weekly team meetings to review project pipelines',
    //         'Mentor junior co-op students and developers through shadowing and overseeing project responsibilities'
    //       ]
    //     },
    //     {
    //       jobTitle: 'Thrinacia',
    //       role: 'Front End Developer',
    //       duration: 'April 2017 - Present (Same organization as Devradius)',
    //       summaryOfCompany: 'Providing SaaS crowdfunding infrastructure services focused on building, customizing and deploying white label crowdfunding applications/platforms, campaigns, widgets and applications to customers.',
    //       bulletsOfRole: [
    //         'Lead the flagship software product through designing, developing and maintaining front-end software development features',
    //         'Walk clients through project scope and deliverables and provide ongoing client consultation',
    //         'Contributed to the deployment of over 6000+ SaaS crowdfunding platforms'
    //       ]
    //     },
    //     {
    //       jobTitle: 'DRIVE Business Intelligence Inc., Quupe Technologies (Internship Experience)',
    //       role: 'Full-Stack Developer',
    //       duration: 'September 2016 – May 2017',
    //       summaryOfCompany: '',
    //       bulletsOfRole: []
    //     }
    //   ],
    //   keyProjects: [
    //     {
    //       projectName: 'Spoonful',
    //       role: 'Full Stack Developer',
    //       bulletsOfRole: [
    //         'Design, architect, implement native Android and IOS application with React Native',
    //         'Design and develop a RESTful API with Headless Wordpress',
    //         'Implement OAuth2 Authentication for Social Logins',
    //         'Create modular plugins for data synchronization of over 300K and growing identified scannable products in the USA'
    //       ]
    //     },
    //     {
    //       projectName: 'PHM',
    //       role: 'Full Stack Developer',
    //       bulletsOfRole: [
    //         'Design, architect, implement a web application for a technical recruitment company',
    //         'Scope and implement an internal system for managing email campaigns for clients/users',
    //         'Functions include candidate registration, client application, and viewable jobs via filterable queries'
    //       ]
    //     },
    //     {
    //       projectName: 'Aventria',
    //       role: 'Full Stack Developer',
    //       bulletsOfRole: [
    //         'Design, architect, implement complex web applications to quickly deploy customized user plugins containing a suite of tools for over 200+ health clinics and hospitals all across the US',
    //         'Develop scalable solutions from front to back end for major pharmaceutical companies to quickly diagnose patients',
    //         'Maintain and extend functionality for all sites in production'
    //       ]
    //     },
    //     {
    //       projectName: 'StudySquare',
    //       role: 'Full Stack Developer',
    //       bulletsOfRole: [
    //         'Develop a complex peer-to-peer tutoring web application with Stripe marketplace architecture',
    //         'Design and develop a white boarding tool with sockiet.IO for users and tutors to concurrently connect',
    //         'Implement a chat system for users to communicate concurrently',
    //         'Implement Stripe API to enable a marketplace platform'
    //       ]
    //     },
    //     {
    //       projectName: 'Thrinacia',
    //       role: 'Full Stack Developer',
    //       bulletsOfRole: [
    //         'Implement front end business logic for Stripe marketplace including PCI compliant Stripe Elements, and Strong Customer Authentication',
    //         'Strong understanding of marketplace solutions',
    //         'Architect, design and develop embeddable crowdfunding tools in React, LitHTML, and Polymer',
    //         'Manage, maintain and develop an embeddable complex web components developed in AngularJs and Angular'
    //       ]
    //     }
    //   ],
    //   education: [
    //     {
    //       schoolName: 'British Columbia Institute of Technology',
    //       yearCompleted: '2017',
    //       educationCompleted: 'Associates Degree, Graduated With Distinctions, Computer Technology/Computer Systems Technology'
    //     }
    //   ]
    // }
    console.log(this.resume);
  }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
    <div class="c14 c18">
      <p class="c31"><span class="c24 c16 c27">${this.resume.firstName}<span class="c24 c27 c16">&nbsp;${this.resume.lastName}</span></p>
      <p class="c1"><span class="c12 c34"><a class="c7" href="mailto:${this.resume.email}">${this.resume.email}</a></span><span class="c12">&nbsp;| </span><span class="c16 c12">${this.resume.phoneNumber}</span><span class="c6 c4">&nbsp;</span></p>
      <p class="c1">
        ${this.resume.socialMedia.map((val, index, array) => html`
          <span class="c25 c14 c12">
            <a class="c7" href="${val}">${val}</a>
          </span>
          ${array.length != (index + 1)?
            html`<span class="c12"> | </span>`:
            html`<span class="c6 c12 c32">&nbsp;</span>`}
        `)}
      </p>
      <h1 class="c29"><span class="c24 c11 c16">PROFESSIONAL SUMMARY</span></h1>
      <ul class="c23 lst-kix_list_14-0 start">
        ${this.resume.professionalSummary.map((val) => html`
          <li class="c17 c5">
            <span class="c14 c12">
              ${val.skill}
              ${val.bolded.map((boldedValue, index, array) => html`
                <span class="c8 c4">${boldedValue}</span>${array.length != (index + 1) ? html`<span class="c3 c4">, </span>` : html`<span class="c3 c4"></span>`}
              `)}
            </span>
          </li>
        `)}
      </ul>
      <h1 class="c19"><span class="c24 c11 c16">Experience</span></h1>
      ${this.resume.experience.map((val, index, array) => html`
        <p class="c1"><span class="c24 c4 c16">${val.jobTitle} | ${val.role} | ${val.duration}</span></p>
        <p class="c1"><span class="c12 c37">${val.summaryOfCompany}</span></p>
        <ul class="c23 lst-kix_list_2-0 start">
          ${val.bulletsOfRole.map((bullets) => html`
            <li class="c0"><span class="c6 c4">${bullets}</li>
          `)}
        </ul>
      `)}
      
      <h1 class="c19"><span class="c24 c11 c16">KEY PROJECTS</span></h1>
      ${this.resume.keyProjects.map((val) => html`
        <p class="c10"><span class="c24 c4 c16">${val.role} (Client: ${val.projectName})</span></p>
        <ul class="c23 lst-kix_list_2-0">
        ${val.bulletsOfRole.map((bullets) => html`
          <li class="c0"><span class="c6 c4">${bullets}</span></li>
        `)}
        </ul>
      `)}
      <h1 class="c19" id="h.aljsgaeh8u18"><span class="c24 c11 c16">Education</span></h1>
      ${this.resume.education.map((val) => html`
        <p class="c1"><span>${val.schoolName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${val.yearCompleted}<br>${val.educationCompleted}</span></p>
      `)}
      <div>
          <p class="c33 c35"><span class="c6 c11"></span></p>
      </div>
    </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('resume-jf', ResumeJF);