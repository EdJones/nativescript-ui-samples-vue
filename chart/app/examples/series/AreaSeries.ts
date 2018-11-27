import * as frameModule from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Area Series';

export default {
  name: 'AreaSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <AreaSeries v-tkCartesianSeries
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="items" />

      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getCountriesData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
