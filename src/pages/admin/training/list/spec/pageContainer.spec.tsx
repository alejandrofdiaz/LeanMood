import { expect } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ListTrainingPageContainer } from '../pageContainer';
import { ListTrainingPage } from '../page';
import * as summaryTrainingListRequest  from '../actions/summaryTrainingListRequest';

const createStore = configureStore();

describe('pageContainer', () => {
  it('Should be defined', sinon.test(() => {
    //Arrange
    let sinon: sinon.SinonStatic = this;

    let mockStore = createStore({
      adminTraining: {
        trainingSummaryList: [
          {
            id: 2,
            name: 'John Doe',
            isactive: false
          },
          {
            id: 3,
            name: 'Mark Somez',
            isactive: true
          }
        ]
      }
    });

    const summaryStudentListRequestStartedMock =
            sinon.stub(summaryTrainingListRequest,
                      'summaryTrainingListRequestStarted',
                      () => {
                        return {
                          type: 'dummy'
                        }
                      });

    const nonTypedMockStore : any = mockStore;
    const pageContainer = mount(
                            <Provider store={nonTypedMockStore}>
                              <ListTrainingPageContainer/>
                            </Provider>
                          );

    expect(pageContainer).not.to.be.undefined;
  }).bind(this));

  it('Should contain a property called TrainingList and be informed', sinon.test(() => {
    let sinon: sinon.SinonStatic = this;

    // Arrange
    let mockStore = createStore({
      adminTraining: {
        trainingSummaryList: [
          {
            id: 2,
            name: 'John Doe',
            isactive: false
          },
          {
            id: 3,
            name: 'Mark Somez',
            isactive: true
          }
        ]
      }
    });

    const summaryTrainingListRequestStartedMock =
      sinon.stub(summaryTrainingListRequest,
        'summaryTrainingListRequestStarted',
        () => {
          return {
            type: 'dummy'
          }
        });

    // Act
    const nonTypedMockStore : any = mockStore;
    const pageContainer = mount(
                            <Provider store={nonTypedMockStore}>
                              <ListTrainingPageContainer/>
                            </Provider>
                          );

    // Assert
    const pagePresentationalWrapper = pageContainer.find('ListTrainingPage');
    expect(pagePresentationalWrapper).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop('fetchTrainings')).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop('trainingList')).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop('trainingList').length).equals(2);
    expect(pagePresentationalWrapper.prop('trainingList')[0].name).equals('John Doe');
    expect(pagePresentationalWrapper.prop('trainingList')[1].name).equals('Mark Somez');
  }).bind(this));

});
