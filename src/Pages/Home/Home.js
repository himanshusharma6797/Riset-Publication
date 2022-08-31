import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
// images
import about from './../../Images/about-us.jpg'
import confrence from './../../Images/conference.jpg'
import guidance from './../../Images/reserch-guidance.jpg'
import publication from './../../Images/reserch-publication.jpg'
import discontinued from './../../Images/scopus-discontinued-journals.jpg'
import science from './../../Images/web-of0science.jpg'
import hec from './../../Images/hec.jpg'
import scopus from './../../Images/scopus-journals.jpg'
// SVG icons
import facebook from './../../facebook.svg'
import twitter from './../../twitter.svg'
import linkedIn from './../../linkedin.svg'

export default function Home() {
  const termsOfPublication = [
    'Once author submit the article and selects the journal from given list, the author can not withdraw the article.', 'Once article is accepted author can not withdraw the article.', 'If author withdraws article after processing with our partner journals or after acceptance of article, then the initial advance fee will not be refunded.',
    'Riset Publication only helps in publication of article with our partner journals, so we do not guarantee a 100% publication.',
    'Riset Publication does not involve any decision making regarding the article by our partner journals.',
    'Article processing fees and advance fee is not refundable.',
    'Our partner journal follows the review process with their own editorial members and they have the right to accept of reject your article.',
    'Article modification after submission will be tolerated according to policies of target journal.',
    'Author will be responsible for originality, authenticity of their article. And article should not be submitted to anywhere or should not be under review any other journal before submitting to RPS.',
    'Copyright of article will follow the policies of target journal.',
    'Corresponding author will be responsible to acceptance of article and he/she is responsible for the payment of publication charges.',
    'Riset Publication have the right to take preliminary review of the article before submitting to target journal.',
    'Riset Publication have the right to make formatting charges according to guidelines of target journals.',
    'Riset Publication have the right to make minor modification in article with consultation of corresponding author.',
    'Riset Publication only provide guidance, support and consultation for processing your article for publication in target journal.',
    'Riset Publication have the right to ask for advance payment for maintenance of article.',
    'Riset Publication is not responsible for inclusion or exclusion of indexed journals in different databases.',
    'If any article is accepted in target publication and author pays the charges after acceptance. And by any chance target journal is removed from a specific indexing before publication of your article. In that case Riset Publication will not be responsible for refund, but we can try to get the refund from target journal.',
    'Author is responsible for selection of journal and crosscheck the information given on RPS website with target journal. Riset Publication will not be responsible for queries after publication of your article.']

  return (
    <div className='container'>
      <section className='sectionMain'>
        <h1 className='heading'>Services what we are providing to Our Authors</h1>
        <div className='confrenceFlex'>
          <img src={confrence} alt='' className="confrenceImage roundedNew" />
          <Link className="imageCaption" to="/">Conference</Link>
        </div>
        <div>
          <div className='d-flex justify-content-between displayOfGuidanceAndPublication'>
            <div className='d-flex confrenceFlex width33percent'>
              <img src={guidance} alt='' className='guidanceImage roundedNew' />
              <Link className="imageCaption textAlignCenter" to="/">Research Guidance</Link>
            </div>
            <div className='d-flex confrenceFlex width33percent'>
              <img src={publication} alt='' className='publicationImage roundedNew' />
              <Link className="imageCaption textAlignCenter" to="/">Research Publication</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='sectionAboutUs'>
        <h1 className='heading'>About Us</h1>
        <ul className='listBlock'>
          <div className='aboutListWithImage'>
            <li className='list'>Today there are thousands of publishers with millions of publication in each field of research that are not limited to engineering, science, medical, social science, business, education, mathematics, economics etc. There are a lot of indexing available and some of most reputable databases are Scopus by Elsevier, Web of Science by Clarivate, DOAJ, PubMed, UGC CARE etc. Journals ranging from open access to closed access, free publication to paid publication.</li>
            <img src={about} alt='' className='aboutImage roundedNew' />
          </div>
          <li className='list'>Author faces very difficulty in selecting a specific journal according their specific requirement. An author may be researcher, a PhD student, lecturer, professor, HOD, principle of any institution, employee of any private or public sector institution. Many author with low knowledge of computers face issues in formatting of article according to journal guidelines.</li>
          <li className='list'>And about many articles are just rejected due to incorrect scope of journal, formatting not according to journal guidelines, author not submitted in specific review period and much more little reasons that can be avoided with our help.</li>
          <li className='list'>All author needs to get their research published with a tight schedule with minimal budget in indexed and reputed journal. Many institutions require different journals indexed in different databases.</li>
          <li className='list'>So for all these issue we come forward to assist in best way we can</li>
        </ul>
      </section>
      <section className='sectionJournals'>
        <h1 className='heading'>Journals</h1>
        <div className='d-flex justify-content-between displayOfGuidanceAndPublication'>
          <div className='circleContainers mt-3'>
            <h5 className='textAlignCenter'>Scopus Discontinued Journals</h5>
            <Link to="/">
              <img src={discontinued} alt='' className="rounded-circle heightWidthCircleImages" />
            </Link>
          </div>
          <div className='circleContainers mt-3'>
            <h5 className='textAlignCenter'>Web of Science Journals</h5>
            <Link to="/">
              <img src={science} alt='' className="rounded-circle heightWidthCircleImages" />
            </Link>
          </div>
        </div>
        <div className='d-flex justify-content-center displayOfGuidanceAndPublication'>
          <div className='circleContainers mt-1 circleContainersTwo'>
            <h5 className='textAlignCenter'>HEC Journals</h5>
            <Link to="/">
              <img src={hec} alt='' className="rounded-circle heightWidthCircleImages" />
            </Link>
          </div>
          <div className='circleContainers mt-1 circleContainersTwo'>
            <h5 className='textAlignCenter'>Scopus Journals</h5>
            <Link to="/">
              <img src={scopus} alt='' className="rounded-circle heightWidthCircleImages" />
            </Link>
          </div>
        </div>
      </section>
      <section className='sectionTermsOfPublication'>
        <h1 className='heading'>Terms Of Publication</h1>
        <div className='termsOfPubBlock'>
          <p className='listPera'>Riset Publication Provides a wide range of publication and consultation services for various journals indexed in Scopus, web of science, PubMED, google scholar etc. We work as intermediator for publication between author and target journal. Now a days it is a very hectic work to select a respected journals with specific indexing and the journal who follows best practices for research publication.</p>
          <ul className='listBlock'>
            {termsOfPublication.map((value, key) => <li className='list' key={key}>{value}</li>)}
          </ul>
        </div>
      </section>
      <section className='sectionFollowUs'>
        <div className='svgLogos'>
          <img src={facebook} className='logoHeight' alt='' />
          <img src={twitter} className='logoHeight' alt='' />
          <img src={linkedIn} className='logoHeight' alt='' />
        </div>
        <p className='followUS'>Follow Us for Latest updates</p>
      </section>
    </div>
  )
}
