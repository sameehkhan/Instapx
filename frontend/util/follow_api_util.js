export const createFollow = follow => (
    $.ajax({
        method: "POST",
        url: "api/follows",
        data: { follow }
    })
);

export const deleteFollow = userId => (
    $.ajax({
        method: "DELETE",
        url: `api/follows/${userId}`
    })
);