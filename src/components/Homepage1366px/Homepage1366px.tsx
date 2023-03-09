import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BgIcon } from './BgIcon';
import { Button_StateHoverChangeIconLef2 } from './Button_StateHoverChangeIconLef2/Button_StateHoverChangeIconLef2';
import { Button_StateHoverChangeIconLef } from './Button_StateHoverChangeIconLef/Button_StateHoverChangeIconLef';
import { Chevron_down } from './Chevron_down/Chevron_down';
import { ElementIcon } from './ElementIcon';
import { Ellipse8Icon } from './Ellipse8Icon';
import { Ellipse8Icon2 } from './Ellipse8Icon2';
import { Ellipse9Icon } from './Ellipse9Icon';
import { EpLocationIcon } from './EpLocationIcon';
import { EpLocationIcon2 } from './EpLocationIcon2';
import { EpLocationIcon3 } from './EpLocationIcon3';
import { FacebookIcon } from './FacebookIcon';
import { FrameIcon } from './FrameIcon';
import { Group1000003623Icon } from './Group1000003623Icon';
import classes from './Homepage1366px.module.css';
import { IcBaselineFlightIcon } from './IcBaselineFlightIcon';
import { IconlyBoldLocation } from './IconlyBoldLocation/IconlyBoldLocation';
import { IonSwapHorizontal } from './IonSwapHorizontal/IonSwapHorizontal';
import { LocationIcon } from './LocationIcon';
import { LocationIcon2 } from './LocationIcon2';
import { PaperPlane_FilledTrue } from './PaperPlane_FilledTrue/PaperPlane_FilledTrue';
import { PlayStore } from './PlayStore/PlayStore';
import { Slider } from './Slider/Slider';
import { SocialMedia } from './SocialMedia/SocialMedia';
import { Star1 } from './Star1/Star1';
import { Star1Icon } from './Star1Icon';
import { Star1Icon2 } from './Star1Icon2';
import { Star1Icon3 } from './Star1Icon3';
import { Star1Icon4 } from './Star1Icon4';
import { Star1Icon5 } from './Star1Icon5';
import { Star1Icon6 } from './Star1Icon6';
import { Star1Icon7 } from './Star1Icon7';
import { Star1Icon8 } from './Star1Icon8';
import { Star12 } from './Star12/Star12';
import { StarsIcon } from './StarsIcon';
import { StarsIcon2 } from './StarsIcon2';
import { StarsIcon3 } from './StarsIcon3';
import { TextField_StyleOutlinedStateEn2 } from './TextField_StyleOutlinedStateEn2/TextField_StyleOutlinedStateEn2';
import { TextField_StyleOutlinedStateEn } from './TextField_StyleOutlinedStateEn/TextField_StyleOutlinedStateEn';
import { TwitterIcon } from './TwitterIcon';
import { Vector2 } from './Vector2/Vector2';
import { Vector3 } from './Vector3/Vector3';
import { Vector99Icon } from './Vector99Icon';
import { Vector } from './Vector/Vector';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';

interface Props {
  className?: string;
  hide?: {
    supportingText?: boolean;
    supportingText2?: boolean;
    supportingText3?: boolean;
    supportingText4?: boolean;
  };
}
/* @figmaId 0:1595 */
export const Homepage1366px: FC<Props> = memo(function Homepage1366px(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle15}></div>
      <div className={classes.illus}>
        <div className={classes.vector99}>
          <Vector99Icon className={classes.icon18} />
        </div>
        <Vector className={classes.vector} />
      </div>
      <div className={classes.frame52}>
        <div className={classes.login}>Login</div>
      </div>
      <div className={classes.frame6}>
        <div className={classes.signUp}>Sign up</div>
      </div>
      <div className={classes.golLogo1}></div>
      <div className={classes.navVar}>
        <div className={classes.findReservations}>Find Reservations</div>
        <div className={classes.group1000003609}>
          <div className={classes.packages}>Packages</div>
          <Vector2 className={classes.vector2} />
        </div>
        <div className={classes.group1000003610}>
          <div className={classes.aboutLakshadweep}>About Lakshadweep</div>
          <Vector2 className={classes.vector3} />
        </div>
        <div className={classes.aboutUs}>About Us</div>
        <div className={classes.gol}>Gol</div>
        <div className={classes.support}>Support</div>
      </div>
      <div className={classes.theExoticLakshadweepIslands}>
        <div className={classes.textBlock}>The Exotic</div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Lakshadweep</span>
          </p>
        </div>
        <div className={classes.textBlock3}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label2}>Islands</span>
          </p>
        </div>
      </div>
      <div className={classes.rectangle16}></div>
      <div className={classes.visit}>Visit</div>
      <Vector3 className={classes.vector4} />
      <div className={classes.discoverBtn}>
        <div className={classes.discoverNow}>Discover Now</div>
      </div>
      <div className={classes.map}></div>
      <div className={classes.rectangle162}></div>
      <div className={classes.bg}>
        <BgIcon className={classes.icon19} />
      </div>
      <div className={classes.layer11}></div>
      <div className={classes.frame10}>
        <div className={classes.icBaselineFlight}>
          <IcBaselineFlightIcon className={classes.icon20} />
        </div>
        <div className={classes.jakartaBali}>Jakarta - Bali</div>
      </div>
      <div className={classes.frame11}>
        <div className={classes.frame}>
          <FrameIcon className={classes.icon21} />
        </div>
      </div>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.frame12}>
        <div className={classes.exploreLabuanBajo}>Explore Labuan Bajo</div>
        <div className={classes.frame112}>
          <IconlyBoldLocation
            className={classes.iconlyBoldLocation}
            classes={{ location: classes.location }}
            swap={{
              location: (
                <div className={classes.location}>
                  <LocationIcon className={classes.icon} />
                </div>
              ),
            }}
          />
          <div className={classes.nTTIndonesua}>NTT, Indonesua</div>
        </div>
      </div>
      <div className={classes.rectangle82}></div>
      <div className={classes.rectangle92}></div>
      <div className={classes.frame122}></div>
      <div className={classes.lePirateHotel}>Le Pirate Hotel</div>
      <div className={classes.frame113}>
        <IconlyBoldLocation
          className={classes.iconlyBoldLocation2}
          classes={{ location: classes.location2 }}
          swap={{
            location: (
              <div className={classes.location2}>
                <LocationIcon2 className={classes.icon2} />
              </div>
            ),
          }}
        />
        <div className={classes.floresIndonesia}>Flores, Indonesia</div>
      </div>
      <div className={classes.flightBooking}>
        <div className={classes.whereAreYouFlying}>Where are you flying? </div>
        <div className={classes.frame40}>
          <TextField_StyleOutlinedStateEn
            className={classes.textField}
            swap={{
              chevronDown: <IonSwapHorizontal />,
            }}
            hide={{
              supportingText: true,
            }}
            text={{
              inputText: <div className={classes.inputText}>Lahore - Karachi</div>,
              labelText: <div className={classes.labelText}>From - To</div>,
            }}
          />
          <TextField_StyleOutlinedStateEn
            className={classes.textField2}
            swap={{
              chevronDown: <Chevron_down />,
            }}
            hide={{
              supportingText: true,
            }}
            text={{
              inputText: <div className={classes.inputText2}>Return</div>,
              labelText: <div className={classes.labelText2}>Trip</div>,
            }}
          />
          <TextField_StyleOutlinedStateEn2
            className={classes.textField4}
            classes={{ stateLayer: classes.stateLayer, textField: classes.textField3 }}
            hide={{
              supportingText: true,
            }}
            text={{
              inputText: <div className={classes.inputText3}>07 Nov 22 - 13 Nov 22</div>,
              labelText: <div className={classes.labelText3}>Depart- Return</div>,
            }}
          />
          <TextField_StyleOutlinedStateEn2
            className={classes.textField5}
            hide={{
              supportingText: true,
            }}
            text={{
              inputText: <div className={classes.inputText4}>1 Passenger, Economy</div>,
              labelText: <div className={classes.labelText4}>Passenger - Class</div>,
            }}
          />
        </div>
        <div className={classes.frame46}>
          <Button_StateHoverChangeIconLef
            swap={{
              vector: <VectorIcon className={classes.icon3} />,
            }}
            text={{
              button: <div className={classes.button}>Add Promo Code</div>,
            }}
          />
          <Button_StateHoverChangeIconLef2
            classes={{ style_layer: classes.style_layer }}
            swap={{
              addOutline: (
                <PaperPlane_FilledTrue
                  className={classes.paperPlane}
                  swap={{
                    vector: <VectorIcon2 className={classes.icon4} />,
                  }}
                />
              ),
            }}
            text={{
              button: <div className={classes.button2}>Show Filghts</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.packageHeading}>
        <div className={classes.bestPackagesForYou}>Best Packages For You</div>
        <div className={classes.thisIsAUniqueExperienceOnShipS}>
          This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.
        </div>
      </div>
      <div className={classes.frame26}>
        <div className={classes.maldives}>Maldives</div>
      </div>
      <div className={classes.frame1000003626}>
        <div className={classes.samudram}>Samudram</div>
      </div>
      <div className={classes.frame1000003627}>
        <div className={classes.cordelia}>Cordelia</div>
      </div>
      <div className={classes.frame1000003628}>
        <div className={classes.agatti}>Agatti</div>
      </div>
      <div className={classes.frame1000003629}>
        <div className={classes.more}>More</div>
      </div>
      <div className={classes.rectangle28}></div>
      <div className={classes.card}>
        <div className={classes.photo}></div>
        <div className={classes.content}>
          <div className={classes.frame1000003633}>
            <div className={classes.frame593}>
              <div className={classes.epLocation}>
                <EpLocationIcon className={classes.icon22} />
              </div>
              <div className={classes.indonesia}>Indonesia</div>
            </div>
            <div className={classes.frame1000003635}>
              <div className={classes.exploreTheBeautyOfTheIslandFor}>
                <div className={classes.textBlock4}>Explore the Beauty of the island for 3 days</div>
                <div className={classes.textBlock5}>and 2 nights with our travel agency...</div>
              </div>
            </div>
          </div>
          <div className={classes.frame1000003623}>
            <Star1 />
            <div className={classes.group593}>
              <div className={classes._45}>4.5</div>
            </div>
          </div>
          <div className={classes.frame1000003632}>
            <div className={classes.frame1000003630}>
              <div className={classes.bookNow}>Book Now</div>
            </div>
          </div>
        </div>
        <div className={classes.rs}>
          <div className={classes.rectangle379}></div>
          <div className={classes._500}>₹500</div>
        </div>
      </div>
      <div className={classes.card2}>
        <div className={classes.photo2}></div>
        <div className={classes.content2}>
          <div className={classes.frame10000036332}>
            <div className={classes.frame5932}>
              <div className={classes.epLocation2}>
                <EpLocationIcon2 className={classes.icon23} />
              </div>
              <div className={classes.indonesia2}>Indonesia</div>
            </div>
            <div className={classes.frame10000036352}>
              <div className={classes.exploreTheBeautyOfTheIslandFor2}>
                <div className={classes.textBlock6}>Explore the Beauty of the island for 3 days</div>
                <div className={classes.textBlock7}>and 2 nights with our travel agency...</div>
              </div>
            </div>
          </div>
          <div className={classes.frame10000036232}>
            <Star12
              className={classes.star1}
              swap={{
                star1: <Star1Icon className={classes.icon5} />,
              }}
            />
            <div className={classes.group5932}>
              <div className={classes._452}>4.5</div>
            </div>
          </div>
          <div className={classes.frame10000036322}>
            <div className={classes.frame10000036302}>
              <div className={classes.bookNow2}>Book Now</div>
            </div>
          </div>
        </div>
        <div className={classes.rs2}>
          <div className={classes.rectangle3792}></div>
          <div className={classes._5002}>₹500</div>
        </div>
      </div>
      <div className={classes.card3}>
        <div className={classes.photo3}></div>
        <div className={classes.content3}>
          <div className={classes.frame10000036333}>
            <div className={classes.frame5933}>
              <div className={classes.epLocation3}>
                <EpLocationIcon3 className={classes.icon24} />
              </div>
              <div className={classes.indonesia3}>Indonesia</div>
            </div>
            <div className={classes.frame10000036353}>
              <div className={classes.exploreTheBeautyOfTheIslandFor3}>
                <div className={classes.textBlock8}>Explore the Beauty of the island for 3 days</div>
                <div className={classes.textBlock9}>and 2 nights with our travel agency...</div>
              </div>
            </div>
          </div>
          <div className={classes.frame10000036233}>
            <Star12
              className={classes.star12}
              swap={{
                star1: <Star1Icon2 className={classes.icon6} />,
              }}
            />
            <div className={classes.group5933}>
              <div className={classes._453}>4.5</div>
            </div>
          </div>
          <div className={classes.frame10000036323}>
            <div className={classes.frame10000036303}>
              <div className={classes.bookNow3}>Book Now</div>
            </div>
          </div>
        </div>
        <div className={classes.rs3}>
          <div className={classes.rectangle3793}></div>
          <div className={classes._5003}>₹500</div>
        </div>
      </div>
      <div className={classes.frame17}>
        <div className={classes.discoverMore}>Discover More</div>
      </div>
      <div className={classes.islandHaeding}>
        <div className={classes.islandStays}>Island Stays</div>
        <div className={classes.oneCanChooseFromAVarietyOfBeau}>
          <div className={classes.textBlock10}>
            One can choose from a variety of beautiful coral islands which offers different staying experiences from
            thatched huts to luxurious
          </div>
          <div className={classes.textBlock11}>
            {' '}
            modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.
          </div>
        </div>
      </div>
      <div className={classes.frame1000003639}>
        <div className={classes.images171}></div>
        <div className={classes.frame1000003637}>
          <div className={classes.frame1000003640}>
            <div className={classes.kavaratti}>Kavaratti</div>
          </div>
          <div className={classes.frame1000003641}>
            <div className={classes.kavarattiIsTheCapitalOfTheUnio}>
              <div className={classes.textBlock12}>Kavaratti is the capital of the Union Territory</div>
              <div className={classes.textBlock13}>of Lakshadweep having ...</div>
            </div>
          </div>
          <div className={classes.frame1000003638}>
            <div className={classes.exploreBtn}>
              <div className={classes.exploreMore}>Explore More</div>
            </div>
          </div>
          <div className={classes.rating}>
            <div className={classes.group600}>
              <Star12
                className={classes.star13}
                swap={{
                  star1: <Star1Icon3 className={classes.icon7} />,
                }}
              />
              <div className={classes._454}>4.5 </div>
            </div>
            <div className={classes._15kReview}>(1.5k Review)</div>
          </div>
        </div>
      </div>
      <div className={classes.frame1000003642}>
        <div className={classes.images1712}></div>
        <div className={classes.frame10000036372}>
          <div className={classes.frame10000036402}>
            <div className={classes.kavaratti2}>Kavaratti</div>
          </div>
          <div className={classes.frame10000036412}>
            <div className={classes.kavarattiIsTheCapitalOfTheUnio2}>
              <div className={classes.textBlock14}>Kavaratti is the capital of the Union Territory</div>
              <div className={classes.textBlock15}>of Lakshadweep having ...</div>
            </div>
          </div>
          <div className={classes.frame10000036382}>
            <div className={classes.exploreBtn2}>
              <div className={classes.exploreMore2}>Explore More</div>
            </div>
          </div>
          <div className={classes.rating2}>
            <div className={classes.group6002}>
              <Star12
                className={classes.star14}
                swap={{
                  star1: <Star1Icon4 className={classes.icon8} />,
                }}
              />
              <div className={classes._455}>4.5 </div>
            </div>
            <div className={classes._15kReview2}>(1.5k Review)</div>
          </div>
        </div>
      </div>
      <div className={classes.frame10000036403}>
        <div className={classes.images1713}></div>
        <div className={classes.frame10000036373}>
          <div className={classes.frame10000036404}>
            <div className={classes.kavaratti3}>Kavaratti</div>
          </div>
          <div className={classes.frame10000036413}>
            <div className={classes.kavarattiIsTheCapitalOfTheUnio3}>
              <div className={classes.textBlock16}>Kavaratti is the capital of the Union Territory</div>
              <div className={classes.textBlock17}>of Lakshadweep having ...</div>
            </div>
          </div>
          <div className={classes.frame10000036383}>
            <div className={classes.exploreBtn3}>
              <div className={classes.exploreMore3}>Explore More</div>
            </div>
          </div>
          <div className={classes.rating3}>
            <div className={classes.group6003}>
              <Star12
                className={classes.star15}
                swap={{
                  star1: <Star1Icon5 className={classes.icon9} />,
                }}
              />
              <div className={classes._456}>4.5 </div>
            </div>
            <div className={classes._15kReview3}>(1.5k Review)</div>
          </div>
        </div>
      </div>
      <div className={classes.frame1000003643}>
        <div className={classes.images1714}></div>
        <div className={classes.frame10000036374}>
          <div className={classes.frame10000036405}>
            <div className={classes.kavaratti4}>Kavaratti</div>
          </div>
          <div className={classes.frame10000036414}>
            <div className={classes.kavarattiIsTheCapitalOfTheUnio4}>
              <div className={classes.textBlock18}>Kavaratti is the capital of the Union Territory</div>
              <div className={classes.textBlock19}>of Lakshadweep having ...</div>
            </div>
          </div>
          <div className={classes.frame10000036384}>
            <div className={classes.exploreBtn4}>
              <div className={classes.exploreMore4}>Explore More</div>
            </div>
          </div>
          <div className={classes.rating4}>
            <div className={classes.group6004}>
              <Star12
                className={classes.star16}
                swap={{
                  star1: <Star1Icon6 className={classes.icon10} />,
                }}
              />
              <div className={classes._457}>4.5 </div>
            </div>
            <div className={classes._15kReview4}>(1.5k Review)</div>
          </div>
        </div>
      </div>
      <div className={classes.frame10000036415}>
        <div className={classes.images1715}></div>
        <div className={classes.frame10000036375}>
          <div className={classes.frame10000036406}>
            <div className={classes.kavaratti5}>Kavaratti</div>
          </div>
          <div className={classes.frame10000036416}>
            <div className={classes.kavarattiIsTheCapitalOfTheUnio5}>
              <div className={classes.textBlock20}>Kavaratti is the capital of the Union Territory</div>
              <div className={classes.textBlock21}>of Lakshadweep having ...</div>
            </div>
          </div>
          <div className={classes.frame10000036385}>
            <div className={classes.exploreBtn5}>
              <div className={classes.exploreMore5}>Explore More</div>
            </div>
          </div>
          <div className={classes.rating5}>
            <div className={classes.group6005}>
              <Star12
                className={classes.star17}
                swap={{
                  star1: <Star1Icon7 className={classes.icon11} />,
                }}
              />
              <div className={classes._458}>4.5 </div>
            </div>
            <div className={classes._15kReview5}>(1.5k Review)</div>
          </div>
        </div>
      </div>
      <div className={classes.frame1000003644}>
        <div className={classes.images1716}></div>
        <div className={classes.frame10000036376}>
          <div className={classes.frame10000036407}>
            <div className={classes.kavaratti6}>Kavaratti</div>
          </div>
          <div className={classes.frame10000036417}>
            <div className={classes.kavarattiIsTheCapitalOfTheUnio6}>
              <div className={classes.textBlock22}>Kavaratti is the capital of the Union Territory</div>
              <div className={classes.textBlock23}>of Lakshadweep having ...</div>
            </div>
          </div>
          <div className={classes.frame10000036386}>
            <div className={classes.exploreBtn6}>
              <div className={classes.exploreMore6}>Explore More</div>
            </div>
          </div>
          <div className={classes.rating6}>
            <div className={classes.group6006}>
              <Star12
                className={classes.star18}
                swap={{
                  star1: <Star1Icon8 className={classes.icon12} />,
                }}
              />
              <div className={classes._459}>4.5 </div>
            </div>
            <div className={classes._15kReview6}>(1.5k Review)</div>
          </div>
        </div>
      </div>
      <div className={classes.frame1000003646}>
        <div className={classes.letSReadyToExploreTheWorldWith}>
          <div className={classes.textBlock24}>Let’s Ready to Explore The </div>
          <div className={classes.textBlock25}>World With Us.</div>
        </div>
        <div className={classes.loremIpsumDolorSitAmetConsecte}>
          <div className={classes.textBlock26}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
          <div className={classes.textBlock27}>Pellentesque efficitur ac quam in congue. </div>
        </div>
        <div className={classes.frame1000003647}>
          <div className={classes.cTA}>
            <div className={classes.contactUs}>Contact Us</div>
          </div>
        </div>
      </div>
      <div className={classes.world_map_PNG283}></div>
      <Slider className={classes.sliderDesktop} />
      <div className={classes.frame10000036262}>
        <div className={classes.whatOurClientsSaysAboutUs}>
          <div className={classes.textBlock28}>What Our Clients Says </div>
          <div className={classes.textBlock29}>About Us</div>
        </div>
      </div>
      <div className={classes.rectangle12}></div>
      <div className={classes.ellipse8}>
        <Ellipse8Icon className={classes.icon25} />
      </div>
      <div className={classes.romanRey}>Roman Rey</div>
      <div className={classes.torantoCanada}>Toranto, Canada</div>
      <div className={classes.stars}>
        <StarsIcon className={classes.icon26} />
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte2}>
        <div className={classes.textBlock30}>Lorem ipsum dolor sit amet, </div>
        <div className={classes.textBlock31}>consectetur adipiscing elit. </div>
        <div className={classes.textBlock32}>Pellentesque efficitur ac quam </div>
        <div className={classes.textBlock33}>in congue. </div>
      </div>
      <div className={classes.rectangle122}></div>
      <div className={classes.ellipse82}>
        <Ellipse8Icon2 className={classes.icon27} />
      </div>
      <div className={classes.alexTom}>Alex Tom</div>
      <div className={classes.torantoCanada2}>Toranto, Canada</div>
      <div className={classes.stars2}>
        <StarsIcon2 className={classes.icon28} />
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte3}>
        <div className={classes.textBlock34}>Lorem ipsum dolor sit amet, </div>
        <div className={classes.textBlock35}>consectetur adipiscing elit. </div>
        <div className={classes.textBlock36}>Pellentesque efficitur ac quam </div>
        <div className={classes.textBlock37}>in congue. </div>
      </div>
      <div className={classes.rectangle13}></div>
      <div className={classes.ellipse9}>
        <Ellipse9Icon className={classes.icon29} />
      </div>
      <div className={classes.finnBalor}>Finn Balor</div>
      <div className={classes.torantoCanada3}>Toranto, Canada</div>
      <div className={classes.stars3}>
        <StarsIcon3 className={classes.icon30} />
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte4}>
        <div className={classes.textBlock38}>Lorem ipsum dolor sit amet, </div>
        <div className={classes.textBlock39}>consectetur adipiscing elit. </div>
        <div className={classes.textBlock40}>Pellentesque efficitur ac quam </div>
        <div className={classes.textBlock41}>in congue. </div>
      </div>
      <Slider className={classes.slider} />
      <div className={classes.rectangle14}></div>
      <SocialMedia
        className={classes.socialMedia}
        swap={{
          facebook: <FacebookIcon className={classes.icon13} />,
          twitter: <TwitterIcon className={classes.icon14} />,
          vector: <VectorIcon3 className={classes.icon15} />,
          vector2: <VectorIcon4 className={classes.icon16} />,
          vector3: <VectorIcon5 className={classes.icon17} />,
        }}
      />
      <div className={classes.company}>Company</div>
      <div className={classes.events}>Events</div>
      <div className={classes.blogs}>Blogs</div>
      <div className={classes.fAQ}>FAQ</div>
      <div className={classes.joinUS}>Join US</div>
      <div className={classes.about}>About</div>
      <div className={classes.project}>Project</div>
      <div className={classes.lorem}>Lorem</div>
      <div className={classes.services}>Services</div>
      <div className={classes.ourStory}>Our Story</div>
      <div className={classes.contactUs2}>Contact Us</div>
      <div className={classes.abcLoremCom}>abc@lorem.com</div>
      <div className={classes.india}>India</div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT}>
        <div className={classes.textBlock42}>Lorem Ipsum is simply dummy </div>
        <div className={classes.textBlock43}>text of the printing and type</div>
        <div className={classes.textBlock44}>setting industry.</div>
      </div>
      <div className={classes.golLogoWhite1}></div>
      <div className={classes.line20}></div>
      <div className={classes.copyright2023GoLTravelsPrivate}>
        Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.
      </div>
      <div className={classes.rectangle378}></div>
      <PlayStore className={classes.playStore} classes={{ googlePlayPngLogo37891: classes.googlePlayPngLogo37891 }} />
      <div className={classes.group1000003623}>
        <Group1000003623Icon className={classes.icon31} />
      </div>
      <div className={classes.downloadOurApp}>Download Our App</div>
      <div className={classes.theBestTravelInTheWorld}>The best travel in the world</div>
      <div className={classes.element}>
        <ElementIcon className={classes.icon32} />
      </div>
    </div>
  );
});
