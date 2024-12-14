import $ from 'jquery';
import _ from 'lodash';

$(function() {
  $('body').append('<p>ALX Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - ALX</p>');

  const updateCounter = () => {
    let count = parseInt($('#count').text()) || 0;
    $('#count').text(`${count + 1} clicks on the button`);
  };

  $('button').on('click', _.debounce(updateCounter, 500));
});
