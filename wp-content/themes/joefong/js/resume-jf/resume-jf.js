// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { resumeStyles } from './resume-styles.js';
import { resumePlaceholder } from './resume-data.js';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'


// Extend the LitElement base class
class ResumeJF extends LitElement {
  static get styles() {
    return [
      resumeStyles
    ]
  }

  static get properties() { 
    return {
      resume: { 
        type: Object
      },
      theme: { 
        type: String
      }
    };
  }

  constructor() {
    super();

    this.theme = 'classic';

    this.resume = resumePlaceholder;
  }

  saveResume(e) {


    const input = this.shadowRoot.getElementById('resumeContainer');
    var cln = input.cloneNode(true);
    document.body.appendChild(cln);
    var resumeEl = document.getElementById('resumeContainer');
    
    html2canvas(resumeEl)
      .then((canvas) => {
        var imgData = canvas.toDataURL('image/jpeg', 1.0);
        var doc = new jsPDF("p", "px", "a4");
        doc.addImage(imgData, 'JPEG', 0, 0, resumeEl.width);
        doc.save('resume.pdf');
        resumeEl.remove();
      })
    ;
  }

  classicTheme() {
    return html`
    <div id="resumeContainer" class="c14 c18">
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

    <button @click="${this.saveResume}" id="saveResume" title="saveMyResume">Save Resume</button>
    `;
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

    if(this.theme == 'classic') {
      return this.classicTheme();
    } 
    
    return html`
    <div class="c14 c18">
      <p>A Theme is required.</p>
    </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('resume-jf', ResumeJF);