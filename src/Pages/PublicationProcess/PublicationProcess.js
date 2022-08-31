import React from 'react'
import './PublicationProcess.css'

export default function PublicationProcess() {
  return (
    <div className='container'>
        <h6 className='headingOfLists'>At first author needs to specify their basic information according to their requirements.</h6>
        <h6 className='headingOfLists'>Requirement Specification:</h6>
        <ul>
            <li className='listOfPP'>Indexing Requirement</li>
            <li className='listOfPP'>Journal’s Scope</li>
            <li className='listOfPP'>Expected time of publication</li>
            <li className='listOfPP'>Maximum budget for publication charges</li>
            <li className='listOfPP'>Any other specific requirement</li>
            <li className='listOfPP'>Article file</li>
        </ul>

        <h6 className='headingOfLists'>Final Procedure:</h6>
        <ul>
            <li className='listOfPP'>We provide a list of available journals matching to author’s requirements.</li>
            <li className='listOfPP'>Author need to make a selection from the given list of journals and ensure by visiting their website and check the authenticity of journals by themselves.</li>
            <li className='listOfPP'>Then the article will be processed with selected journal and we ensure about the publication process with target journal.</li>
            <li className='listOfPP'>After getting the acceptance author needs to pay the charges as per our terms.</li>
            <li className='listOfPP'>Once all formalities completes then the target journals publishes the work and we inform the author about their publication.</li>
        </ul>
    </div>
  )
}
