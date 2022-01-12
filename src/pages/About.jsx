import React, { useEffect } from "react";

export default function Portfolio() {
  // Always scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <h1>About Kevin Cincotta</h1>
      <p>
        I'm baby bicycle rights letterpress swag cliche, hella salvia PBR&B pug
        mustache cred. Hashtag thundercats man bun, migas pug cliche PBR&B
        poutine. Williamsburg 3 wolf moon banjo keytar man bun adaptogen mlkshk
        meditation 8-bit. Typewriter tacos try-hard vice, asymmetrical YOLO
        cornhole sustainable.
      </p>
      <p>
        Yuccie small batch succulents, biodiesel health goth beard tattooed etsy
        bushwick disrupt DIY raw denim brooklyn church-key meditation. Food
        truck austin selfies pinterest, DIY roof party kale chips tilde hell of
        XOXO VHS chartreuse adaptogen craft beer. 3 wolf moon jean shorts
        flexitarian vinyl food truck, readymade echo park kogi PBR&B poke
        chartreuse adaptogen. Etsy pug craft beer, enamel pin bespoke keffiyeh
        williamsburg. Vinyl ramps enamel pin, meggings hexagon bespoke small
        batch aesthetic sustainable green juice cardigan blue bottle.
      </p>
      <p>
        Readymade copper mug before they sold out, umami squid dreamcatcher
        hexagon sriracha cloud bread hammock occupy glossier. Tumblr bespoke
        ennui leggings, literally food truck VHS normcore. Schlitz +1 lyft
        coloring book ramps whatever. Freegan affogato everyday carry craft
        beer. Vaporware photo booth street art synth freegan chartreuse
        kickstarter etsy jianbing sriracha tacos adaptogen drinking vinegar food
        truck. Put a bird on it tumblr butcher quinoa thundercats succulents.
      </p>
      <p>
        Iceland butcher YOLO bushwick austin, brooklyn tumblr thundercats.
        Glossier portland pitchfork yr four dollar toast fam readymade keffiyeh
        brunch banh mi. Pok pok roof party iPhone wayfarers kale chips tacos
        pork belly vape. Locavore tousled mlkshk cloud bread la croix lomo cred
        90's austin chicharrones scenester YOLO ennui vinyl. Cornhole pickled
        brooklyn hella blue bottle. Ennui fanny pack waistcoat biodiesel occupy
        everyday carry artisan enamel pin, try-hard hot chicken keytar brooklyn
        deep v food truck. Viral hexagon flannel distillery schlitz microdosing
        deep v scenester sustainable selfies plaid fashion axe put a bird on it
        kombucha.
      </p>
      <p>
        Af DIY mixtape unicorn cold-pressed. Tofu narwhal tousled, raclette
        mlkshk wolf tilde authentic +1 affogato art party biodiesel portland.
        Blue bottle cardigan normcore mlkshk, franzen schlitz taiyaki pop-up
        tumblr knausgaard. Letterpress meditation green juice tote bag health
        goth locavore farm-to-table. Direct trade trust fund chicharrones
        sustainable, art party butcher prism brunch put a bird on it literally.
        Authentic marfa mlkshk, hammock tilde sriracha chia street art
        typewriter fingerstache mustache lyft. Poke plaid XOXO next level
        single-origin coffee shoreditch ramps asymmetrical neutra succulents put
        a bird on it pop-up tbh.
      </p>
      <p>Dummy text? More like dummy thicc text, amirite?</p>
    </div>
  );
}
