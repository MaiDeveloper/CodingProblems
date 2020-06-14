import restoreIpAddresses from '../restore-ip-addresses';

describe('Restore IP Addresses', () => {

  test('25525511135', () => {
    const result = restoreIpAddresses('25525511135');
    const expected = [
      '255.255.11.135',
      '255.255.111.35',
    ];
    expect(result).toEqual(expected);
  });

});