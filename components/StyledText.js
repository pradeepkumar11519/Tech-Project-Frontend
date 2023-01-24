import React from 'react'
import Image from 'next/image'
import me from '../public/images/About1.jpeg'
export default function StyledText() {
    return (
        <div id="styled_text" className='w-auto'>
            <div id="container">
                <div id="center-image" className=''>
                    <Image layout='responsive' className='' placeholder="blur" src ={me} alt="" />
                </div>
                <div id="left_text" className='text-xs text-white sm:text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolore accusamus impedit harum molestias iste obcaecati commodi officiis. Obcaecati, soluta. Aperiam illum quo unde officia et! Eligendi quasi unde reprehenderit a veniam ad cupiditate rerum, autem nostrum minus, iste quos expedita architecto blanditiis dolorum obcaecati nobis delectus quidem quo aperiam adipisci? Praesentium, deleniti! Dolore reprehenderit similique excepturi cum culpa recusandae perspiciatis odio debitis vitae explicabo rem molestias dolorum deserunt sit, est id placeat cumque exercitationem officia nostrum! Dignissimos, dolorem sed tenetur perferendis aperiam totam ipsa quod repellendus soluta qui laudantium odio! Illum in dolore nam, animi, numquam dolor praesentium est cupiditate qui ipsam et, placeat aspernatur veniam voluptatum. Laborum similique inventore a repudiandae odit ab, voluptatibus illo debitis voluptatem non fuga nesciunt nemo molestiae assumenda sed aliquam ipsum totam esse sequi. Laboriosam, consequatur exercitationem. Eius voluptatibus magnam repellat, at aut odio assumenda nisi dolor sequi! Tempora officiis quisquam debitis autem, sint id soluta, commodi voluptate, voluptatibus natus repellendus quam quod quibusdam dolor qui reiciendis incidunt ex. Nisi iusto reprehenderit enim voluptates odio ducimus recusandae reiciendis officia. Temporibus, nulla officiis fuga obcaecati praesentium, quaerat eos est eaque facilis asperiores sit, illo sint. Ipsum, laboriosam. Itaque eum tempore consequatur minima cumque aut expedita necessitatibus. Doloribus dolorem soluta rem beatae aspernatur tempora consequatur! Repudiandae beatae suscipit dolorem odit perspiciatis officia dolore iure sequi minus sed. Fugit sequi molestiae est excepturi sunt eveniet iste a harum culpa et facilis ipsam ea ex libero obcaecati voluptatibus hic, maiores optio distinctio quibusdam recusandae reprehenderit fugiat enim? Dolorum molestiae omnis sit eum maiores est voluptas a error distinctio. Temporibus dolorem aspernatur deserunt? Laboriosam illo voluptatem aliquid itaque, doloribus repudiandae quaerat. Ipsum, et. Quaerat, ratione natus nesciunt nemo, illo dolorem voluptatem libero ducimus vel harum, voluptates eos commodi dolor veritatis repellendus similique. Facilis ipsam repellat praesentium id suscipit.
                </div>
                <div id="right_text" className='text-xs text-white sm:text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente natus ea dignissimos? Quos corporis voluptatem impedit quisquam alias quidem accusamus recusandae tenetur, accusantium ducimus explicabo non voluptate amet iure voluptatum iusto sit odit hic blanditiis ratione temporibus placeat fuga. Placeat porro nemo, maiores ipsa, saepe nihil blanditiis at reiciendis similique repellendus beatae? Et itaque non laborum esse perspiciatis ducimus, rem sint quisquam sunt temporibus voluptatibus accusamus at voluptatum quia alias est sequi nam deserunt eius totam numquam? Illum explicabo quisquam, est cumque quaerat voluptates. Nobis sequi, ipsum cumque voluptatum reprehenderit perferendis quod. Cupiditate, deserunt tempora exercitationem vel odio, ratione laudantium sit, labore inventore ipsa temporibus voluptas fuga ducimus dolorum nobis officia! Non culpa at recusandae voluptas debitis doloribus assumenda quo maxime, esse adipisci expedita numquam sed veritatis incidunt pariatur? Ducimus quod minima dolor explicabo pariatur ab aliquid repudiandae accusamus quidem qui cumque non numquam eaque, laborum nihil nemo repellendus deleniti exercitationem? Fuga, suscipit ipsum? Quam ipsa dolores dolore reprehenderit, alias corrupti excepturi maxime maiores ducimus amet id, repudiandae doloremque reiciendis blanditiis. Voluptas magni porro eius libero modi nobis hic est consectetur ab velit. Tempore dolores sapiente et expedita neque quisquam id commodi molestiae beatae culpa nemo hic magnam maxime doloremque ullam voluptatem veniam, quo animi voluptate, quasi qui quas fugiat! Alias eius eaque mollitia saepe, voluptates cupiditate eligendi ab ex! Quo, repellat optio amet recusandae voluptates, molestias fuga eaque reprehenderit quia, officiis aliquam repellendus. Nulla, illo. Laudantium totam expedita non nesciunt porro laboriosam minima aliquam nisi consequuntur iste recusandae, dolorem rerum. Voluptate, sunt voluptatem? Blanditiis illo voluptatem accusantium corporis qui ea id voluptatibus, quae voluptates facere fugiat eum dolorem itaque quia atque aperiam, hic nobis quod. Minus quam eaque quos dolorum deserunt inventore aut dignissimos eius ut aliquid, sint totam eum dolorem, distinctio possimus non ea, ipsam nisi! Beatae?
                </div>

            </div>
            <style jsx>
                {`
                #styled_text{
                    font-family:tahoma;
                    color:#333;
                    line-height:28px;
                    font-size:15px;
                    overflow:hidden;
                }
                #container{
                    width:98%;
                    height:800px;
                    margin:0 auto;
                    position:relative;
                    text-align:justify;
                }
                #center-image{
                    clip-path:circle(50%);
                    width:580px;
                    height:580px;
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%) scale(0.85);
                }
                #center-image img{
                    width:580px;
                    
                    object-fit:cover;
                }
                #left_text{
                    width:48%;
                    float:left;
                }
                #left_text:before,#right_text:before{
                    content:"";
                    width:250px;
                    height:707px;
                }
                #left_text:before{
                    float:right;
                    shape-outside:polygon(1.57% 59.5%,7.91% 43.88%,24.42% 34.33%,53.82% 25.42%,99.38% 21.05%,100.07% 93.04%,55.84% 88.35%,17.85% 77.99%);
                    
                }
                #right_text{
                    width:48%;
                    float:right;
                }
                #right_text::before{
                    
                    float:left;
                    shape-outside:polygon(98.87% 55.77%,89.89% 40.49%,73.91% 33.73%,42.53% 24.57%,-0.55% 21.08%,0.21% 92.18%,50.78% 87.79%,87.79% 74.37%);
                }
                `}
                
            </style>
        </div>
    )
}
