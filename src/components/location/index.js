import React from 'react'

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369103.6693520346!2d-79.65823632926555!3d43.71839533955293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1594613788612!5m2!1sen!2sca"
                width="100%"
                height="450px"
                frameBorder="0"
                allowFullScreen={true}
            >

            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    )
}

export default Location