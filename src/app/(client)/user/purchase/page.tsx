//chakra
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

//component
import {
  AllPurchase,
  PayPurchase,
  ShipPurchase,
  ReceivePurchase,
  CompletePurchase,
  CancelPurchase,
  RefundPurchase
} from '@/components/client/purchase';

const Purchase = () => {
  return (
    <div className="flex flex-auto bg-white shadow-md">
      <Tabs colorScheme="green" width="full">
        <TabList w="full" display="flex" justifyContent="space-between">
          <Tab>All</Tab>
          <Tab>To Pay</Tab>
          <Tab>To Ship</Tab>
          <Tab>To Receive</Tab>
          <Tab>Completed</Tab>
          <Tab>Cancel</Tab>
          <Tab>Return / Refund</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AllPurchase />
          </TabPanel>
          <TabPanel>
            <PayPurchase />
          </TabPanel>
          <TabPanel>
            <ShipPurchase />
          </TabPanel>
          <TabPanel>
            <ReceivePurchase />
          </TabPanel>
          <TabPanel>
            <CompletePurchase />
          </TabPanel>
          <TabPanel>
            <CancelPurchase />
          </TabPanel>
          <TabPanel>
            <RefundPurchase />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Purchase;
