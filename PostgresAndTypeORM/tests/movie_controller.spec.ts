import 'mocha';

import { expect } from 'chai';
import request from 'supertest';
import { cleanUpMetadata } from 'inversify-express-utils';
// import serverInstance from '../index';

import { server } from '../index'

const BASE_URL = `/api/v1/movies`;

describe('MovieController', function () {
  this.timeout(50000);
  beforeEach(done => {
    cleanUpMetadata();
    done();
  });

  describe('#GET', function () {


  });

  describe('#POST', function () {
    it('should create a new movie', (done: any) => {
      request(server)
        .post(`${BASE_URL}/`)
        .send({
          title: 'jackie chan',
          year: 2019,
        })
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          const resp = res.body;
          expect(resp.success).to.equal(true);
        });
      done();
    });


  });

  describe('#PUT', function () {

  });

  describe('#DELETE', function () {

  });
});