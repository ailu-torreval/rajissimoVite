import React from "react";
import SubscriptionTextBox from "../sections/SubscriptionTextBox";
import AboutUsSection from "../sections/AboutUsSection";
import img from "../assets/all-products.png";
import SubscriptionFormSection from "../sections/SubscriptionFormSection";
import TreatsBoxSection from "../sections/TreatsBoxSection";
function SubsPage() {
  return (
    <div>
      <h2 className="uppercase underline text-center pt-[40px] md:pt-[100px]">
        Discover our offer
      </h2>
      <SubscriptionTextBox
        class="flex flex-col items-start gap-4 justify-center mx-8 my-2 md:py-[100px] py-[40px]"
        title="Take a look inside"
        description="Every month we select an assortment of new and well known products to put into our Treatsboxes. Our Regular size box contains an assortment of 8 – 10 products. Our products are freshly made and you are never full enough when it comes to them! Every month you will be delighted with our churros, waffles and gelato, different combined in innovative ways!"
        caption="*The cost of shipment is not included"
        captionclass="text-xs"
      />
      <TreatsBoxSection
        sectionclass="flex flex-col gap-4 mx-8 my-2 md:pb-[100px] pb-[40px]"
        img={img}
        title="Treatsbox Monthly Sweets Box Subscription"
        titleclass="text-start md:text-center"
        boxclass="flex flex-col items-center gap-4 md:flex-row justify-center md:gap-x-24"
        content1="Treatsbox’s sweets box subscription service ships sweets and a huge variety of treats straight to your door."
        content2="Treatsbox subscriptions ship on the 5th of each month! Our monthly cut-off date for subscription orders is the first of each month."
        content3="For example: If you place your order any time between March 2nd to March 31st, your (first) box will ship April 5th."
      />
      <SubscriptionTextBox
        title="Take a look inside"
        class="flex flex-col items-start gap-4 justify-center mx-8 my-2 md:pb-[100px] pb-[40px]"
        description="The sweets in a Treatsbox subscription slightly changes every month, so every box is a sweet surprise! We offer the best products that will delight you! You have the opportunity to choose 3 different sauces and 2 drinks for each month (you will be notified on the 1st about the ongoing offer)."
        caption="Our subscriptions automatically renew every month with no long-term contracts and you can cancel at any time.
        "
      />
      <SubscriptionFormSection class="flex flex-col items-start gap-4 justify-center mx-8 my-2 md:pb-[100px] pb-[40px] md:items-center" />
    </div>
  );
}

export default SubsPage;
