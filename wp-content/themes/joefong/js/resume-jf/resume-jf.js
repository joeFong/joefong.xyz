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
    // cln.style.opacity = 0;
    document.body.appendChild(cln);
    var resumeEl = document.getElementById('resumeContainer');
    html2canvas(resumeEl)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("portrait", "mm", "a4");
        pdf.addImage(imgData, 'PNG', 10, 10);
        console.log(imgData);
        pdf.save("download.pdf");
        // resumeEl.remove();
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