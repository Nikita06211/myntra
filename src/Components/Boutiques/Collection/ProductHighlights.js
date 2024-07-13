import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Image4 from "../../../Components/Images/return.png";
import Image5 from "../../../Components/Images/devivery.png";
import Image6 from "../../../Components/Images/contact.png";

export default function ProductHighlights() {
    return (
        <>
            <div style={{display:"flex", paddingTop:"2rem"}}>
                <h3>PRODUCT HIGHLIGHTS</h3><span> <StarIcon /></span>
            </div>
            <ul style={{paddingLeft:"2rem", paddingTop:"1rem"}}>
                <li>High-quality Net fabric with intricate embroidery</li>
                <li>Available in various sizes: S, M, L, XL</li>
                <li>Perfect for weddings, parties, and special occasions</li>
                <li>Easy 7 days returns and exchanges</li>
                <li>Myntra Delivered with No-Contact Delivery</li>
                <li>Designed for comfort and elegance</li>
            </ul>
            <div style={{lineHeight:"25px", paddingTop:"20px", display:"flex", marginLeft:"2rem", marginBottom:"2rem"}}>
                <div >
                    <img src={Image4} alt="" width="70px"/>
                    <p>Easy 7 days returns <br /> and exchanges</p>
                </div>
                <div style={{marginRight:"2rem", marginLeft:"2rem"}}>
                    <img src={Image5} alt=""  width="70px"/>
                    <p>Myntra Delivered</p>
                </div>
                <div>
                    <img src={Image6} alt=""  width="70px"/>
                    <p>No-Contact Delivery</p>
                </div>
            </div>
            <hr />
            <div style={{display:"flex", paddingTop:"2rem"}}>
                <h3>CUSTOMER REVIEWS </h3><span> <AssignmentIcon /></span>
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", paddingTop:"1rem"}}>
                <div style={{display:"flex", alignItems:"center", marginBottom:"1rem"}}>
                    <StarIcon style={{color:"#f0c14b", marginRight:"0.5rem"}} />
                    <p style={{marginRight:"1rem"}}>4.2</p>
                    <p>Excellent</p>
                </div>
                <div style={{display:"flex", alignItems:"center", marginBottom:"1rem"}}>
                    <StarIcon style={{color:"#f0c14b", marginRight:"0.5rem"}} />
                    <p style={{marginRight:"1rem"}}>1.2k Ratings</p>
                </div>
                <div style={{display:"flex", alignItems:"center", marginBottom:"1rem"}}>
                    <StarIcon style={{color:"#f0c14b", marginRight:"0.5rem"}} />
                    <p style={{marginRight:"1rem"}}>Verified Purchase</p>
                </div>
            </div>
            <br /><hr /><br />
        </>
    )
}

// export default ProductHighlights;
